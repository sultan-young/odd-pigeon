import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import * as ReactDOM from 'react-dom'
import styles from './index.modules.less'
import { FeatureConfigList } from '@/router'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { Progress } from 'antd'

const progressWrapStyles: React.CSSProperties = {
  display: 'flex',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  justifyContent: 'center',
  alignItems: 'center',
}

interface ElementsHolderRef {
  setBoxVisible: any
  updateProgressVisible: any
  setProgressPercent: any
}

export const SwitchBox = React.forwardRef<ElementsHolderRef>((props, ref) => {
  const navigate = useNavigate()
  const [boxVisible, setBoxVisible] = useState(false)
  // 进度条进度
  const [percent, setProgressPercent] = useState<number>(0)
  const [progressVisible, setProgressVisible] = useState(false)

  // 在组件顶层通过调用 useImperativeHandle 来自定义 ref 暴露出来的句柄：
  React.useImperativeHandle(
    ref,
    () => ({
      setBoxVisible,
      updateProgressVisible,
      setProgressPercent,
    }),
    [boxVisible]
  );

  const updateProgressVisible = useCallback((visible: boolean) => {
    if (visible && boxVisible) return;
    setProgressVisible(visible)
  }, [ boxVisible])

  const clickOverlay = () => {
    setBoxVisible(false)
  }
  const clickModel = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const openApplication = (path: string, event: React.MouseEvent) => {
    event.stopPropagation()
    navigate(path)
    console.log('app: ', path)
  }
  return (
    <>
      {progressVisible ? (
        <div style={progressWrapStyles}>
          <Progress
            type="circle"
            percent={percent}
            strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
          />
        </div>
      ) : (
        <></>
      )}
      {boxVisible ? (
        <div className={styles.overlay} onClick={clickOverlay}>
          <div className={styles.modal}>
            {FeatureConfigList.map((feature) => {
              if (feature.children) {
                return (
                  <div
                    className={`${styles.item} ${styles['app-container']}`}
                    key={feature.key}
                  >
                    {feature.children.map((item) => {
                      return (
                        <div
                          className={`${styles['app-item--mini-wrap']}`}
                          key={item.key}
                        >
                          <div
                            className={`${styles['app-item--mini']}`}
                            onClick={(event) =>
                              openApplication(
                                `${feature.path}/${item.path}`,
                                event
                              )
                            }
                          >
                            {item.title}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )
              }
              return (
                <div
                  className={`${styles.item} ${styles['app-item']}`}
                  onClick={(event) => openApplication(feature.path, event)}
                  key={feature.key}
                >
                  {feature.title}
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
})

export const openSwitchBoxPortal: any = () => {
  const ref = useRef<ElementsHolderRef>(null)

  const MyComponent = SwitchBox

  const fns: {
    open: () => void
    destroy: () => void
    setProgress: (percent: number) => void
    destroyProgress: () => void
  } = {
    open: () => {
      ref.current?.updateProgressVisible(false)
      ref.current?.setBoxVisible(true)
    },
    setProgress: (percent) => {
   
      ref.current?.updateProgressVisible(true)
      ref.current?.setProgressPercent(Math.ceil(percent))
    },
    destroy: () => {
      ref.current?.setBoxVisible(false)
    },
    destroyProgress: () => {
      ref.current?.updateProgressVisible(false)
    }
  }

  return [fns, <MyComponent ref={ref} />]
}
