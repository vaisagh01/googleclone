import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      {/* define the paths */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Search' element={<Search />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
