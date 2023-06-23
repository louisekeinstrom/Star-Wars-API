import axios from "axios"
import { PagesPeople, ResultPeople, SearchResponse } from "../types"

const BASE_URL = "https://swapi.thehiveresistance.com/api"

const instance = axios.create({
	baseURL: "https://swapi.thehiveresistance.com/api",
	timeout: 10000,
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

export const getAllPeople = () => {
	return get<ResultPeople>('/people')
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

export const searches = async ( resource:string,) => {
	return get<ResultPeople>(`${resource}`)
}

// // Searches for a person on page nr. 
// export const searchPeople = async ( query: string, page = 0) => {
// 	return get<SearchResponse>(`people/search?query=${query}&page=${page}`)
// }