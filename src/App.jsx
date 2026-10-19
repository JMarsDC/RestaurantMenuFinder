import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import NavBar from "./components/NavBar"

function App() {

  return (
   <>
  <NavBar/>

    <main className="flex-1 p-8 box-border w-full flex flex-col">
      <Routes>
        <Route path="/" />
        <Route path="/"/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </main>
  </>
  )
}

export default App
