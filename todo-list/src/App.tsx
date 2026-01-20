
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import List from './view/List'
import Login from "./view/Login"


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todolist" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
