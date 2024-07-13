import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Films from "./Pages/Films";
import People from "./Pages/People";
import Planets from "./Pages/Planets";
import Species from "./Pages/Species";
import Starships from "./Pages/Starships";
import Vehicles from "./Pages/Vehicles";
import Navigation from "./Components/Navigation";
import OneFilm from "./Pages/OneFilm";
import OnePerson from "./Pages/OnePerson";
import OnePlanet from "./Pages/OnePlanet";
import OneSpecies from "./Pages/OneSpecies";
import OneStarship from "./Pages/OneStarship";
import OneVehicle from "./Pages/OneVehicle";

function App() {
	return (
		<>
			<div id="App">
				<Navigation />
				<Container
					id="container"
					className="p-2"
					style={{ width: "70%" }}
				>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/films" element={<Films />} />
						<Route path="/films/:id" element={<OneFilm />} />
						<Route path="/people" element={<People />} />
						<Route path="/people/:id" element={<OnePerson />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:id" element={<OnePlanet />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/vehicles/:id" element={<OneVehicle />} />
						<Route path="/starships" element={<Starships />} />
						<Route
							path="/starships/:id"
							element={<OneStarship />}
						/>
						<Route path="/species" element={<Species />} />
						<Route path="/species/:id" element={<OneSpecies />} />

						<Route path="*" element={<NotFound />} />
					</Routes>
				</Container>
			</div>
		</>
	);
}

export default App;
