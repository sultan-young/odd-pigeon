import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styles from './index.module.less'
import { MENUS_TREE } from '@/menu'

export function Sidebar() {
  const menus = MENUS_TREE.children || []

  return (
    <div className={styles.layout}>
      {menus.map((menu) => (
        <li key={menu.key}>
          <NavLink to={menu.key}>{menu.title}</NavLink>
        </li>
      ))}
    </div>
  )
}
