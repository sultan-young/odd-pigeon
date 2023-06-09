import React, { useMemo, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import styles from './index.module.less'
import { MENUS_TREE } from '@/menu';

export function SubSidebar() {
  let { sidebar } = useParams();
  const sideMenus = MENUS_TREE.children || [];
  const target = sideMenus.find(item => item.key === sidebar);
  const featureMenus = target?.children || [];

  return (
    <div className={styles.wrap}>
      <div className={styles['sub-sidebar']}>
        {!featureMenus.length
          ? target?.content
          : featureMenus.map((menu: any) => (
              <li key={menu.key}>
                <NavLink to={menu.key}>
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
