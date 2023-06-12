import { Container } from "react-bootstrap"
import { Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import NotFound from "./Pages/NotFound"
import Films from "./Pages/Films"
import People from "./Pages/People"
import Planets from "./Pages/Planets"
import Species from "./Pages/Species"
import Starships from "./Pages/Starships"
import Vehicles from "./Pages/Vehicles"
import Navigation from "./Components/Navigation"


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
