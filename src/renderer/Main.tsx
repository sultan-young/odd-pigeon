import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.less'
import {
  createHashRouter,
  Link,
  Navigate,
  RouterProvider,
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import './services/shortcutKey'
import { appRouter } from './router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} fallbackElement={<>失败了</>}/> 
  </React.StrictMode>
)
