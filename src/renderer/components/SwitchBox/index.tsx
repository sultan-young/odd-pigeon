import React, { forwardRef, useEffect, useRef, useState } from 'react'
import * as ReactDOM from 'react-dom'
import styles from './index.modules.less'
import { FeatureConfigList } from '@/router'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'

interface ElementsHolderRef {
  setVisible: any
}

export const SwitchBox = React.forwardRef<ElementsHolderRef>((props, ref) => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  // 在组件顶层通过调用 useImperativeHandle 来自定义 ref 暴露出来的句柄：
  React.useImperativeHandle(
    ref,
    () => ({
      setVisible,
    }),
    []
  )

  const clickOverlay = () => {
    setVisible(false)
  }
  const clickModel = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const openApplication = (path: string, event: React.MouseEvent) => {
    event.stopPropagation()
    navigate(path)
    console.log('app: ', path)
  }
  return visible ? (
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
                          openApplication(`${feature.path}/${item.path}`, event)
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
  )
})

export const openSwitchBoxPortal: any = () => {
  const ref = useRef<ElementsHolderRef>(null)

  const MyComponent = SwitchBox

  const fns: {
    open: () => void
    destroy: () => void
  } = {
    open: () => {
      ref.current?.setVisible(true)
    },
    destroy: () => {
      ref.current?.setVisible(false)
    },
  }

  return [fns, <MyComponent ref={ref} />]
}
