import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter
} from "react-router-dom";

import Home from "../../pages/Home";
import Navbar from "../components/Navbar";
import NotFound from "../../pages/NotFound";

const router = createBrowserRouter([
  { path: "*", Component: Root },
])

export default function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navbar />}>
        <Route index element={< Home />} />
      </Route>
    </Routes>
  )
}
