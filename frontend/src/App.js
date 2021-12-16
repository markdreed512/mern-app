import './normalize.css'
import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import List from './components/list/List'
import Login from './components/login/Login'
import Register from './components/register/Register'
import UserContext from './components/UserContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const[ username, setUsername] = useState('')
  return (
    <div className="App">
      <UserContext.Provider value = {[username, setUsername]}>
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/list" element={<List/>}  />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
