import React from 'react'
import styles from './index.modules.less'
import { CopyOutlined, RedoOutlined } from '@ant-design/icons'
import { ChatVO, Role } from '../../types'

interface IProps {
  chatVO: ChatVO
}

export const ChatItem: React.FC<IProps> = (props) => {
  const { chatVO } = props
  const isOnLeft = chatVO.role === Role.AI

  return (
    <article
      className={styles.wrap}
      style={{ flexDirection: isOnLeft ? 'row' : 'row-reverse' }}
    >
      <div className={styles.avatar}>
        <img width="34px" src="/assets/svg/gpt.svg" />
      </div>
      <div className={styles['chat-container']}>
        <div
          className={styles.action}
          style={{ justifyContent: isOnLeft ? 'flex-start' : 'flex-end' }}
        >
          <time dateTime="2022-01-01T10:00:00">2022年1月1日上午10点</time>
          <CopyOutlined style={{ padding: '0 4px' }} />
          <RedoOutlined style={{ padding: '0 4px' }} />
        </div>
        <div
          className={styles['chat-container-main']}
          style={{ flexDirection: isOnLeft ? 'row' : 'row-reverse' }}
        >
          <p className={styles.text}>{chatVO.content}</p>
        </div>
      </div>
    </article>
  )
}
