import React from 'react'
import styles from './index.modules.less'
import { CopyOutlined, RedoOutlined } from '@ant-design/icons'
console.log('styles: ', styles)

export function ChatItem() {
  return (
    <article className={styles.wrap}>
      <div>
        <img width="34px" src="/assets/svg/gpt.svg" />
      </div>
      <div className={styles.padding}></div>
      <div className={styles['chat-container']}>
        <div className={styles.action}>
          <time dateTime="2022-01-01T10:00:00">2022年1月1日上午10点</time>
          <CopyOutlined style={{ padding: '0 4px' }} />
          <RedoOutlined style={{ padding: '0 4px' }} />
        </div>
        <div className={styles['chat-container-main']}>
          <p className={styles.text}>
            I apologize, but I still don't understand what you are trying to
            communicate. If you could provide more information or context, I
            would be happy to try to assist you.
          </p>
        </div>
      </div>
    </article>
  )
}
