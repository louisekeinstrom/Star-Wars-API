import axios from "axios"
import { PagesPeople, ResultPeople, SearchResponse } from "../types"

const BASE_URL = "https://swapi.thehiveresistance.com/api"


	// GENERIC GET-REQUEST

/**
 * @param { string } endpoint
 * @returns Promise 
 */

export const get = async <T>(endpoint: string) => {
	const res = await axios.get(BASE_URL + endpoint)
	return res.data as T
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
export const search = async ( query: string, page = 0) => {
	return get<SearchResponse>(`/search?query=${query}&tags=story&page=${page}`)
}

// Searches for a person on page nr. 
export const searchPeople = async ( query: string, page = 0) => {
	return get<SearchResponse>(`people/search?query=${query}&tags=story&page=${page}`)
}