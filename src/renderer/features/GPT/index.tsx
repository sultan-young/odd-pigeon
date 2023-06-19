import React, { useEffect, useState } from 'react'
import './index.style.less'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChatItem } from './components/ChatItem'
import { ChatVO, Role } from './types'
import apiServer from '@/services'

export function Gpt() {
  const [chatList, setChatList] = useState<ChatVO[]>([])

  useEffect(() => {
    console.log(11111)
    apiServer.post('/api/openAi/chat').then(res => {
      setChatList(res.data)
    })
  }, [])

  return (
    <div className="gpt-container">
      <main className="gpt-main-container">
        {chatList.map((chatItem, index) => (
          <ChatItem chatVO={chatItem} key={index}/>
        ))}
      </main>
      <div className="gpt-footer-container">
        <TextArea autoSize placeholder="按下回车键发送" bordered={false} />
      </div>
    </div>
  )
}
