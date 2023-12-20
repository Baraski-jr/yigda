import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Developers from "./pages/developers";
import NoPage from "./pages/no_page";
import Portal from "./pages/portal";
import Register from "./pages/register";
import Contact from "./components/sections/contact";
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Developers />} />
        <Route path="portal" element={<Portal />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default App
