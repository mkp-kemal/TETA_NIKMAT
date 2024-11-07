import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <MainRoutes/>
    </Router>
  )
}

export default App


const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
