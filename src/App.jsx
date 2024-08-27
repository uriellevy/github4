import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='app'>
     <Outlet/>
     <div>footer</div>
    </div>
  )
}

export default App
