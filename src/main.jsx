import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DepartmentTable from './components/Department/DepartmentTable.jsx';
import DepartmentForm from './components/Department/DepartmentForm.jsx';
import DepartmentFormUpdate from './components/Department/DepartmentFormUpdate.jsx'


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
   
    children: [
      {
        path: "department-table",
        element: <DepartmentTable></DepartmentTable>
        
      },
      {
        path: "department-form",
        element: <DepartmentForm></DepartmentForm>
        
      },
      {
        path: "department-form-update",
        element: <DepartmentFormUpdate></DepartmentFormUpdate>
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
