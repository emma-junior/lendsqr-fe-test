import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import Details from './pages/details/Details';
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/users" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/users/:id" element={<Details />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
