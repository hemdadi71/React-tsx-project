import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Routes/root.tsx'
import ErrorPage from './Error-page.tsx'
import Contact from './Routes/Contact.tsx'
import Home from './Routes/Home.tsx'
import Posts from './Routes/Posts.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contacts',
        element: <Contact />,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
    ],
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
