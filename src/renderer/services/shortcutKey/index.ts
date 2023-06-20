import {
  Subscription,
  buffer,
  combineLatest,
  distinctUntilChanged,
  filter,
  from,
  fromEvent,
  map,
  share,
  switchMap,
  takeUntil,
  tap,
  throttle,
  throttleTime,
  timer,
} from 'rxjs'

// 快捷键类型
export enum ShortCutKeyType {
  LongPress,
}

interface IRegisterLongPressEvent {
  keycode: string;
  triggerTime: number;
  trigger: (event: KeyboardEvent) => void;
  progress?: (progress: number) => void;
}

class ShortCutKeyService {
  listenerArea: Element = document.documentElement;

  constructor(listenerArea?: Element) {
    if (listenerArea instanceof Element) {
      this.listenerArea = listenerArea;
    }
  }
  registerLongPressEvent({keycode, triggerTime, trigger, progress}: IRegisterLongPressEvent) {
    // 用来处理长按抬起后再次按下无法触发快捷键的问题
    let triggerLock = true

    const keyup$ = fromEvent<KeyboardEvent>(this.listenerArea, 'keyup').pipe(
      share(),
      filter((event) => event.key === keycode)
    )

    const progressTimer$ = timer(0, 100)
    let progressTimerSubscription: Subscription | null

    keyup$.subscribe({
      next(value) {
        // 按键抬起后，将锁打开
        triggerLock = false
        progressTimerSubscription && progressTimerSubscription.unsubscribe()
      },
    })

    const subjection = fromEvent<KeyboardEvent>(this.listenerArea, 'keydown')
      .pipe(
        // 节流函数
        throttleTime(150),
        filter((event) => event.key === keycode),
        // 像字母这种常规的键位，只要按下就会一直触发事件。这里从第一次按下的字母开始计时，忽略后续同一时间
        // distinctUntilChanged 如果condition is true，则忽略本次事件
        distinctUntilChanged((lastEffectiveEvent, newEvent) => {
          return lastEffectiveEvent.key === newEvent.key && triggerLock
        }),
        tap(_ => {
          // 触发后将锁关闭
          triggerLock = true
          let startTime = Date.now();

          if (progressTimerSubscription) {
            progressTimerSubscription.unsubscribe()
          }
          if (progress) {
            // 开启一个定时器，实时监听进度。
            progressTimerSubscription = progressTimer$.subscribe(() => {
              const nowTime = Date.now();
              const process = (nowTime - startTime) / triggerTime;
              progress(process > 0.01 ? process : 0)
            })
          }
        }),
        // 将键盘事件mao成一个x秒后触发的延时器。当延时器触发，说明条件满足。
        switchMap((event) =>
          timer(triggerTime).pipe(
            map((_) => event),
            takeUntil(keyup$)
          )
        )
      )
      .subscribe((event) => {
        progressTimerSubscription && progressTimerSubscription.unsubscribe()
        progress && (progress(1));
        trigger(event)
      })
    return subjection
  }
};

export {
  ShortCutKeyService,
}

const shortCutKeyService = new ShortCutKeyService();
shortCutKeyService.registerLongPressEvent({
  keycode: 'Meta', 
  triggerTime: 1000, 
  trigger: () => {
    console.log('出现弹窗')
  }, 
  progress: (progress) => {
    console.log(`当前进度---${progress}`)
  }
})
