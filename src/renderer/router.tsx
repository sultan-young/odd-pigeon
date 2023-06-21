import React from 'react'
import { Navigate, createHashRouter } from 'react-router-dom'
import { App } from './App'
import { Gpt } from './features/GPT'
import { Tools } from './features/Tools'
import { Md5 } from './features/Tools/Md5'
import { UrlParse } from './features/Tools/UrlParse'
import { Today } from './features/TODO/Today'

const FeatureConfigList = [
  {
    key: 'gpt',
    title: 'gpt',
    path: 'gpt',
    element: <Gpt />,
  },
  {
    key: 'tools',
    title: 'tools',
    path: 'tools',
    children: [
      {
        key: 'md5',
        title: 'md5',
        path: 'md5',
        element: <Md5 />,
      },
      {
        key: 'urlParse1',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse2',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse3',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse4',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse5',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse6',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse7',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse8',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse9',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
      {
        key: 'urlParse10',
        title: 'urlParse',
        path: 'urlParse',
        element: <UrlParse />,
      },
    ],
  },
  {
    key: 'todo',
    title: 'todo',
    path: 'todo',
    children: [
      {
        key: 'today',
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
