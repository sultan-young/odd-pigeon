import React, { useEffect, useState } from 'react'
import styles from './index.modules.less'
import { Button, Col, Input, Layout, Row } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChatItem } from './components/ChatItem'
import { ChatVO, Role } from './types'
import apiServer from '@/services/apis'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import { PlusOutlined, SendOutlined } from '@ant-design/icons'

export function Gpt() {
  const [chatList, setChatList] = useState<ChatVO[]>([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const lastChatVO = chatList[chatList.length - 1]
    if (!lastChatVO) return
    apiServer
      .post('/ai/chat', {
        model: 'gpt-3.5-turbo',
        message: lastChatVO.text,
        conversationId: '32e3118e-c796-496c-8c78-c2da83cfe7bb',
        parentMessageId: 'f4e0252d-ab8e-4a6c-b4dc-8458dcc89a4c',
      })
      .then((res: any) => {
        console.log('list: ', chatList)
        const list = [
          ...chatList,
          {
            role: Role.Assistant,
            text: res.text,
            timeStamp: res.timeStamp,
          },
        ]
        setChatList(list)
      })
  }, [chatList])

  const onPressEnter = (el: React.KeyboardEvent) => {
    el.preventDefault()
    el.stopPropagation()
    sendMessage()
  }

  const sendMessage = () => {
    if (!inputValue) return;
    setChatList([
      ...chatList,
      {
        role: Role.User,
        text: inputValue,
        timeStamp: Date.now(),
      },
    ])
    setInputValue('')
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        className={styles.sider}
        collapsible={true}
        collapsedWidth={0}
        breakpoint="md"
        trigger={null}
      >
        <div className={styles.wrap}>
          <button className={styles['new-chat']}>New Chat</button>
        </div>
      </Sider>
      <Content className={styles.main}>
        <div className={styles['chat-area']}>
          {chatList.map((chatItem, index) => (
            <ChatItem chatVO={chatItem} key={index} />
          ))}
        </div>
        <div className={styles['bottom']}>
          <div className={styles['input-area']}>
            <div className={styles['input-area-wrap']}>
              <TextArea
                autoSize
                placeholder="按下回车键发送"
                bordered={false}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={onPressEnter}
              />
            </div>
            <SendOutlined onClick={sendMessage} className={`${styles['send-icon']} ${inputValue ? styles['send-icon--enabled'] : styles['send-icon--disabled']}`}/>
          </div>
        </div>
      </Content>
    </Layout>
  )
}
