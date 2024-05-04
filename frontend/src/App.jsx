import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Timeline from "./pages/Timeline"
import Register from "./pages/Register"
import UserProfile from "./pages/UserProfile"
import PrivateRoute from "./components/PrivateRoute"
import Layout from "./components/Layout"
import SoloTweet from "./pages/SoloTweet"
import Noti from "./pages/Noti"
import Chat from "./pages/Chat"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route element={<PrivateRoute/>}>
            <Route path="/" element={<Timeline/>} />
            <Route path="/tweet/:id" element={<SoloTweet/>} />
            <Route path="/:username" element={<UserProfile/>} />
            <Route path="/noti" element={<Noti/>} />
            <Route path="/chat/:user" element={<Chat/>} />
            <Route path="/contacts" element={<Contacts/>} />
          </Route>        

        </Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
