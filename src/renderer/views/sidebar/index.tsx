import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styles from './index.module.less'
import { MENUS } from '@/menu'

export function Sidebar() {
  return (
    <div className={styles.layout}>
      {MENUS.map((menu) => (
        <li key={menu.key}>
          <NavLink to={menu.key} state={{ menuData: menu }}>{menu.title}</NavLink>
        </li>
      ))}
    </div>
  )
}
