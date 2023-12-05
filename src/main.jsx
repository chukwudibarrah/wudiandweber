import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import WebDev from './pages/WebDev.jsx';
import Branding from './pages/Branding.jsx';
import Copywriting from './pages/Copywriting.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <App />
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/webdevelopment',
        element: <WebDev />,
      },
      {
        path: '/branding',
        element: <Branding />,
      },
      {
        path: '/copywriting',
        element: <Copywriting />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
