import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <h1>Ready to Rock</h1>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
