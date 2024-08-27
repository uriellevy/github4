import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='app'>
     <Outlet/>
     <div>footer</div>
     <nav>
        <Link to="/github4/">Home</Link>
        {" | "}
        <Link to="/github4/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default App
