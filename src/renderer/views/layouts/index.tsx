import React from 'react'
import styles from './index.module.less'
import { Link, Outlet, Route } from 'react-router-dom'
import { Sidebar } from '@/views/sidebar'

console.log(location.href)

export function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar></Sidebar>
      </div>
      <div className={styles.extra}>
        <Outlet></Outlet>
      </div>
      {/* <div className={styles['main-panel']}>
      </div> */}
    </div>
  )
}
