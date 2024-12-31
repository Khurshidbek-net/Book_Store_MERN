import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>Navbar</nav>
        <main className='min-h-screen'>
          <Outlet/>
        </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
