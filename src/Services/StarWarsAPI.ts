import axios from "axios"
import { 
		FilmResponse, 
		FilmType,
		PeopleResponse, 
		PeopleType,
		PlanetResponse,
		PlanetType,
		SearchResponse,
		StarshipsResponse,
		StarshipsType, 
		SpeciesResponse,
		SpeciesType,
		VehiclesResponse,
		VehiclesType,

		} from "../types"

const instance = axios.create({
	baseURL: "https://swapi.thehiveresistance.com/api",
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
})

	// GENERIC GET-REQUEST

/**
 * @param { string } endpoint
 * @returns Promise 
 */

const get = async <T>(endpoint: string) => {
	const response = await instance.get(endpoint)
	return response.data as T
}

	// PEOPLE

// get all people
export const getAllPeople = () => {
	return get<PeopleResponse>('/people')
}

// get one person
export const getOnePerson = (id:number) => {
	return get<PeopleType>(`/people/${id}`)
}

	// FILMS

// get all films
export const getAllFilms = () => {
	return get<FilmResponse>('/films')
}

// get one film
export const getOneFilm = (id:number) => {
	return get<FilmType>(`/films/${id}`)
}

	// PLANETS

// get all planets
export const getAllPlanets = () => {
	return get<PlanetResponse>('/planets')
}

// get one planet
export const getOnePlanet= (id:number) => {
	return get<PlanetType>(`/planets/${id}`)
}

	// SPECIES

// get all species
export const getAllSpecies = () => {
	return get<SpeciesResponse>('/species')
}

// get one species
export const getOneSpecies= (id:number) => {
	return get<SpeciesType>(`/species/${id}`)
}

	// STARSHIPS

// get all starships
export const getAllStarships = () => {
	return get<StarshipsResponse>('/starships')
}

// get one starship
export const getOneStarship= (id:number) => {
	return get<StarshipsType>(`/starships/${id}`)
}

	// VEHICLES

// get all vehicles
export const getAllVehicles = () => {
	return get<VehiclesResponse>('/vehicles')
}

// get one vehicle
export const getOneVehicle = (id:number) => {
	return get<VehiclesType>(`/vehicles/${id}`)
}

	// SEARCH
/**
 * @param { string } resource
 * @param { string } query
 * @param { number } page
 * @returns Promise 
 */

// Searches for a query on page nr. 
export const search = async ( resource:string, query: string, page = 0) => {
	return get<SearchResponse>(`${resource}/search?query=${query}&page=${page}`)
}

// export const searches = async ( resource:string,) => {
// 	return get<ResultPeople>(`${resource}`)
// }

// // Searches for a person on page nr. 
// export const searchPeople = async ( query: string, page = 0) => {
// 	return get<SearchResponse>(`people/search?query=${query}&page=${page}`)
// }