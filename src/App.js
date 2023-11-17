import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
