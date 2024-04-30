import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import DepartmentTable from './components/Department/DepartmentTable.jsx';
import DepartmentForm from './components/Department/DepartmentForm.jsx';
import DepartmentFormUpdate from './components/Department/DepartmentFormUpdate.jsx';
import Home from './layout/Home.jsx'; // Import the Home component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} /> {/* This is the Home route */}
          <Route path="department-table" element={<DepartmentTable />} />
          <Route path="department-form" element={<DepartmentForm />} />
          <Route path="department-form-update" element={<DepartmentFormUpdate />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
