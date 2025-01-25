import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router
