import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  { path: "*", Component: Root },
])

export default function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}