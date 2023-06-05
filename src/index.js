import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Todo from './routes/Todo';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "todo",
    element: <Todo />
  },
  {
    path: "signin",
    element: <SignIn />
  },
  {
    path: "signup",
    element: <SignUp />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);
