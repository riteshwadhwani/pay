import React from "react"
import {Route,Routes} from 'react-router-dom'
import {SignUp} from "./pages/SignUp"
import {SignIn} from "./pages/SignIn"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"
import Home from "./pages/Home"
function App() {

  return (
    <div>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
       </Routes>
    </div>
  )
}

export default App
