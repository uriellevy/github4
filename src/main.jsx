import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/github4/",
    element: <App />,
    children: [
      {
        path: "/github4/",
        element: <Home />,
      },
      {
        path: "/github4/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
