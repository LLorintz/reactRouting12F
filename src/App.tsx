import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import CountryPage from './pages/CountryPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import UserPage from './pages/UserPage'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Link to={'/'}>Home</Link>|
      <Link to={'/profile'}>Profile</Link>|
      <Link to={'/country'}>Country</Link>|
      <Link to={'/user/1'}>User 1</Link>|
      <Link to={'/user/2'}>User 2</Link>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/profile' Component={ProfilePage}/>
        <Route path='/country' Component={CountryPage}/>
        <Route path='/user/:id' Component={UserPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
