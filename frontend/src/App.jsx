import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Timeline from "./pages/Timeline"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<Timeline/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
