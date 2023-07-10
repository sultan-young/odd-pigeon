import React, { forwardRef, useEffect, useRef, useState } from 'react'
import * as ReactDOM from 'react-dom'
import styles from './index.modules.less'
import { FeatureConfigList } from '@/router'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'

export const SwitchBox = forwardRef(
  (props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const navigate = useNavigate()

    const clickOverlay = () => {
      // @ts-ignore
      if (!ref?.current) return
      // @ts-ignore
      ref.current.style.display = 'none'
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
      <div
        ref={ref}
        style={{ display: 'none' }}
        className={styles.overlay}
        onClick={clickOverlay}
      >
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
    )
  }
)

export const openSwitchBoxPortal: any = () => {
  const ref = useRef<HTMLDivElement>(null)

  const MyComponent = SwitchBox

  const fns: {
    open: () => void
    destroy: () => void
  } = {
    open: () => {
      if (!ref.current) return
      ref.current.style.display = 'block'
    },
    destroy: () => {
      if (!ref.current) return
      ref.current.style.display = 'none'
    },
  }

  return [fns, <MyComponent ref={ref} />]
}
