import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Timeline from "./pages/Timeline"
import Register from "./pages/Register"
import UserProfile from "./pages/UserProfile"
import PrivateRoute from "./components/PrivateRoute"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route element={<PrivateRoute/>}>
            <Route path="/" element={<Timeline/>} />
            <Route path="/:username" element={<UserProfile/>} />
          </Route>        

          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<Register/>} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
