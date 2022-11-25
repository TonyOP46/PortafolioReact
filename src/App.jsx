import './App.css'
import Cv from './pages/Cv'
import NavBar from './pages/NavBar'
import { HashRouter, Routes, Route} from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
function App() {
  

  return (
        <HashRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Cv/>}/>
            <Route path='/AboutMe' element={<AboutMe/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Portfolio' element={<Portfolio/>}/>
          </Routes>
        </HashRouter>
  )
}

export default App
