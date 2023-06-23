import { Container } from "react-bootstrap"
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import Films from "./pages/Films"
import People from "./pages/People"
import Planets from "./pages/Planets"
import Species from "./pages/Species"
import Starships from "./pages/Starships"
import Vehicles from "./pages/Vehicles"
import Navigation from "./components/Navigation"


function App() {

  return (
    <>

      <div id="App">
        <Navigation/>
    
        <Container>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/films" element={<Films/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/planets" element={<Planets/>}/>
            <Route path="/vehicles" element={<Vehicles/>}/>
            <Route path="/starships" element={<Starships/>}/>
            <Route path="/species" element={<Species/>}/>

            <Route path="*" element={<NotFound/>}/>

          </Routes>
        </Container>
        
      </div>
    </>
  )
}

export default App
