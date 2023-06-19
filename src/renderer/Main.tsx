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
import { App } from './App'
import { Gpt } from './features/GPT'
import { Tools } from './features/Tools'
import { Md5 } from './features/Tools/Md5'
import { UrlParse } from './features/Tools/UrlParse'
import { Today } from './features/TODO/Today'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/app"></Navigate>
  },
  {
    path: "/app",
    element: <App/>,
    children: [
      {
        path: "gpt",
        element: <Gpt/>,
      },
      {
        path: "tools",
        children: [
          {
            path: 'md5',
            element: <Md5/>
          },
          {
            path: 'urlParse',
            element: <UrlParse/>
          }
        ]
      },
      {
        path: 'todo',
        children: [
          {
            path: 'today',
            element: <Today/>
          }
        ]
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<>失败了</>}/> 
    {/* <RouterProvider router={router} fallbackElement={<>失败了</>}/> */}
  </React.StrictMode>
)
