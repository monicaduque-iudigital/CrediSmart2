import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreditRequest from './pages/CreditRequest'
import Simulator from './pages/Simulator'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solicitar-credito" element={<CreditRequest />} />
          <Route path="/simulador" element={<Simulator />} />
        </Routes>
      </main>
    </div>
  )
}

export default App