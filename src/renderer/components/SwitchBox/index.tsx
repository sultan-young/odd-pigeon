import React from 'react'
import styles from './index.modules.less'

export const SwitchBox = () => {
  const clickOverlay = () => {
    console.log('点击背景')
  }
  const clickModel = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log('点击应用', event)
  }

  const clickItem = () => {

  }

  return (
    <div className={styles.overlay} onClick={clickOverlay}>
      <div className={styles.modal} onClick={clickModel}>
        <div className={styles.item} onClick={clickItem}>GPT</div>
        <div className={styles.item} onClick={clickItem}>MD5</div>
        <div className={styles.item} onClick={clickItem}>TODO</div>
        <div className={styles.item} onClick={clickItem}>TODO</div>
        <div className={styles.item} onClick={clickItem}>TODO</div>
        <div className={styles.item} onClick={clickItem}>TODO</div>
        <div className={styles.item} onClick={clickItem}>TODO</div>
      </div>
    </div>
  )
}
