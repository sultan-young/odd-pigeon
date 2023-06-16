import React from 'react'
import './index.style.less'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'

export function Gpt() {
  return (
    <div className="gpt-container">
      <main className="gpt-main-container">文章内容</main>
      <div className="gpt-footer-container">
        <TextArea autoSize placeholder="按下回车键发送" bordered={false} />
      </div>
    </div>
  )
}
