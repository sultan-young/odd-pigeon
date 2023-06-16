import React, { useEffect, useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import {  Layout, Menu, theme } from 'antd'
import { MenuInfo } from './types/antd.type'
import { Outlet, useLocation, useMatch, useMatches } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const items: MenuItem[] = [
  getItem('GPT', 'gpt', <PieChartOutlined />),
  getItem('常用工具', 'tools', <DesktopOutlined />, [
    getItem('md5', 'md5'),
    getItem('urlParse', 'urlParse'),
  ]),
  getItem('TODO', 'todo', <PieChartOutlined />, [
    getItem('今日事', 'today'),
  ]),
]

export function App() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  const match = useMatch('/app/*');
  const [openKeys, setOpenKeys] = useState(['']);
  const [selectedKeys, setSelectedKeys] = useState(['GPT']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    // 查找最新打开的
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    // 打开新的时候，同时关闭就得option
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };
  

  useEffect(() => {
    if (match) {
        const { params } = match;
        const pathStr = params['*'] || '';
        const pathList = pathStr.split('/')
        if (pathList.length) {
            setOpenKeys(pathList.slice(0, 1))
            setSelectedKeys(pathList);
        }
    }
  }, [])

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function onClickMenuItem(item: MenuInfo) {
    // menu中pathKey和路由的路径是反序的
    const keyPath = [...item.keyPath].reverse();
    setSelectedKeys(keyPath)
    navigate(keyPath.join('/'))
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          mode="inline"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onOpenChange={onOpenChange}
          items={items}
          onClick={onClickMenuItem}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}
