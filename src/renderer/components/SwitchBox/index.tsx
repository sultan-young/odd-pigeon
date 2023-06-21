import React from 'react'
import styles from './index.modules.less'
import { FeatureConfigList } from '@/router'
import { useNavigate } from 'react-router-dom'

export const SwitchBox = () => {
    console.log(FeatureConfigList)
    const navigate = useNavigate();

  const clickOverlay = () => {
    console.log('点击背景')
  }
  const clickModel = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const openApplication = (path: string, event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(path)
    console.log('app: ', path);
  }

  return (
    <div className={styles.overlay} onClick={clickOverlay}>
      <div className={styles.modal}>
        {
            FeatureConfigList.map(feature => {
                if (feature.children) {
                   return <div className={`${styles.item} ${styles['app-container']}`} key={feature.key}>
                        {
                            feature.children.map(item => {
                                return <div className={`${styles['app-item--mini-wrap']}`} key={item.key}>
                                    <div className={`${styles['app-item--mini']}`} onClick={(event) => openApplication(`${feature.path}/${item.path}`, event)}>
                                      {item.title}
                                    </div>
                                </div>
                            })
                        }
                   </div>
                }
                return <div className={`${styles.item} ${styles['app-item']}`} onClick={(event) => openApplication(feature.path, event)} key={feature.key}>{feature.title}</div>
            })
        }
      </div>
    </div>
  )
}
