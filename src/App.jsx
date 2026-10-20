import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Zubuchon from "./pages/Zubuchon"
import NgohiongExpress from "./pages/NgohiongExpress"
import Paolito from "./pages/Paolito"
import Leona from "./pages/Leona"

function App() {

  return (
   <>
  <NavBar />

    <main className="flex-1 p-8 box-border w-full flex flex-col">
      <Routes>
        <Route path="/" element={<Leona />}/>
        <Route path="/" element={<Paolito />}/>
        <Route path="/" element={<NgohiongExpress />}/>
        <Route path="/Zubuchon" element={<Zubuchon />}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </main>

  <Footer />
  </>
  )
}

export default App
