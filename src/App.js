import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './user/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Userlogin from './user/Userlogin';
import Admin from './user/Admin';
import Sign from './user/Sign'
import Addmovies from './user/Addmovies';

function App() {
  return (
    <>
    <Router>
    <div>
     <Navbar/>
    
    
     <Routes>
      <Route exact path="/login" element={<Userlogin/>}/>
      <Route exact path="/admin" element={<Admin/>}/>
      <Route exact path="/signup" element={<Sign/>}/>
     </Routes>
    
    
    </div>
    </Router>
    <Addmovies/>
    </>
  );
}

export default App;
