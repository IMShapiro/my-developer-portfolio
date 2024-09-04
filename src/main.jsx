import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services"
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>Something went wrong here</div>,
    children: [
        { index: true, element: <Home /> },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/projects",
          element: <Projects/>
        },
         {
          path: "/contact",
          element: <Contact/>
        },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
