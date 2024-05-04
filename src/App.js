import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import UniversityComponent from './Pages/UniversityComponent';
import UniversityDetails from './Pages/UniversityDetails';


function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
        <Route path="/" element={<UniversityComponent />} />
        <Route path="/university-details" element={<UniversityDetails />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
