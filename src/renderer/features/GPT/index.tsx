import React, { useEffect, useState } from 'react'
import styles from './index.modules.less'
import { Button, Col, Input, Layout, Row } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import { PlusOutlined, SendOutlined, SettingOutlined } from '@ant-design/icons'
import { NavLink, Outlet } from 'react-router-dom'

export function Gpt() {
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
          {/* 创建新会话 */}
          <NavLink to="new">
            <Button ghost className={styles['new-chat-btn']}>
              New Chat
            </Button>
          </NavLink>
          {/* 会话列表 */}
          <div className={styles['chat-list-container']}></div>
          {/* 个人配置区域 */}
          <div>
            <NavLink to="setting">
              <Button
                ghost
                icon={<SettingOutlined />}
                style={{ color: '#fff', width: '100%' }}
              >
                设置
              </Button>
            </NavLink>
          </div>
        </div>
      </Sider>
      <Content className={styles.main}>
        <Outlet></Outlet>
      </Content>
    </Layout>
  )
}
