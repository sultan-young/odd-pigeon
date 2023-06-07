import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.less'
import {
  createHashRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './views/layouts';
import { SubSidebar } from '@/views/sub-sidebar';
import { MainPanel } from './views/main-panel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: ":sidebar",
        element: <SubSidebar></SubSidebar>,
        children: [
          {
            path: ":sub",
            element: <MainPanel></MainPanel>
          }
        ]
      },
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);