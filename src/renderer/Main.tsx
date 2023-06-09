import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.less'
import {
  createHashRouter,
  Link,
  Navigate,
  RouterProvider,
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Layout } from './views/layouts'
import { SubSidebar } from '@/views/sub-sidebar'
import { MainPanel } from './views/main-panel'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Navigate to="/app"></Navigate>
//   },
//   {
//     path: "/app",
//     element: <Layout/>,
//     children: [
//       {
//         path: ":sidebar",
//         element: <SubSidebar></SubSidebar>,
//         children: [
//           {
//             path: ":sub",
//             element: <MainPanel></MainPanel>
//           }
//         ]
//       },
//     ]
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/app"/>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="app" element={<Layout/>}>
          <Route path=":sidebar" element={<SubSidebar></SubSidebar>}>
            {/* <Route index element={<PostIndex />} /> */}
            <Route path=':featureKey' element={<MainPanel></MainPanel>} />
          </Route>
        </Route>
      </Routes>
    </Router>
    {/* <RouterProvider router={router} fallbackElement={<>失败了</>}/> */}
  </React.StrictMode>
)
