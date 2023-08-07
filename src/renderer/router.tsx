import React from 'react'
import { Navigate, createHashRouter } from 'react-router-dom'
import { App } from './App'
import { Gpt } from './features/GPT'
import { Tools } from './features/Tools'
import { Md5 } from './features/Tools/Md5'
import { UrlParse } from './features/Tools/UrlParse'
import { Today } from './features/TODO/Today'
import { ChatGptSetting } from './features/GPT/components/Setting'
import { ChatPanel } from './features/GPT/components/ChatPanel'

const FeatureConfigList = [
  {
    title: 'gpt',
    path: 'gpt',
    element: <Gpt />,
    children: [
      {
        path: 'chat',
        element: <ChatPanel/>
      },
      {
        path: 'setting',
        element: <ChatGptSetting/>
      }
    ]
  },
  {
    title: 'tools',
    path: 'tools',
    children: [
      {
        title: 'md5',
        path: 'md5',
        element: <Md5 />,
      },
      {
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
    ],
  },
  {
    title: 'todo',
    path: 'todo',
    children: [
      {
        title: 'today',
        path: 'today',
        element: <Today />,
      },
    ],
  },
]

const RouterConfig = [
  {
    path: '/',
    element: <Navigate to="/app"></Navigate>,
  },
  {
    path: '/app',
    element: <App />,
    children: FeatureConfigList,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]

const appRouter = createHashRouter(RouterConfig)


export { RouterConfig, FeatureConfigList, appRouter }
