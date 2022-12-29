import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import Details from './pages/details/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/user/:id" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
