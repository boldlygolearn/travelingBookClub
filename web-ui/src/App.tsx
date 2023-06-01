import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./modules/login/login"
import CreateUser from "./modules/user/createUser/createUser"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-account" element={<CreateUser />} />
    </Routes>
  )
}

export default App
