import axios from "axios"
import { SearchResponse } from "../types"

const BASE_URL = "https://swapi.thehiveresistance.com/api"


	// GENERIC GET-REQUEST

/**
 * @param { string } endpoint
 * @returns Promise 
 */

const get = async <T>(endpoint: string) => {
	const res = await axios.get(BASE_URL + endpoint)
	return res.data as T
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