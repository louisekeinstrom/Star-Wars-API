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
import OneFilm from "./pages/OneFilm"
import OnePerson from "./pages/OnePerson"
import OnePlanet from "./pages/OnePlanet"
import OneSpecies from "./pages/OneSpecies"
import OneStarship from "./pages/OneStarship"
import OneVehicle from "./pages/OneVehicle"


function App() {

  return (
    <>

      <div id="App">
        <Navigation/>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/films" element={<Films/>}/>
            <Route path="/films/:id" element={<OneFilm/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/people/:id" element={<OnePerson/>}/>
            <Route path="/planets" element={<Planets/>}/>
            <Route path="/planets/:id" element={<OnePlanet/>}/>
            <Route path="/vehicles" element={<Vehicles/>}/>
            <Route path="/vehicles/:id" element={<OneVehicle/>}/>
            <Route path="/starships" element={<Starships/>}/>
            <Route path="/starships/:id" element={<OneStarship/>}/>
            <Route path="/species" element={<Species/>}/>
            <Route path="/species/:id" element={<OneSpecies/>}/>


            <Route path="*" element={<NotFound/>}/>

          </Routes>
        </Container>
        
      </div>
    </>
  )
}

export default App
