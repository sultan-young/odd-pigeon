import React from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import styles from './index.module.less'

export function SubSidebar() {
  let { state } = useLocation()
  const menuData = state.menuData
  const children = menuData.children || []
  console.log('state: ', children.length)

  return (
    <div className={styles.wrap}>
      <div className={styles['sub-sidebar']}>
        {!children.length
          ? menuData.content
          : children.map((menu: any) => (
              <li key={menu.key}>
                <NavLink to={menu.key} state={{ menus: menu.children }}>
                  {menu.title}
                </NavLink>
              </li>
            ))}
      </div>
      <div className={styles.main}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
