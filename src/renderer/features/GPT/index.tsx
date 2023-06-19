import React from 'react'
import './index.style.less'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChatItem } from './components/ChatItem'

export function Gpt() {
  return (
    <div className="gpt-container">
      <main className="gpt-main-container">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </main>
      <div className="gpt-footer-container">
        <TextArea autoSize placeholder="按下回车键发送" bordered={false} />
      </div>
    </div>
  )
}
