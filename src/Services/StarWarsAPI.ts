import axios from "axios"

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

export const getAllData = async <T>(endpoint: string) => {
	const response = await instance.get(`${endpoint}`)
	return response.data as T
}

export const getData = async <T>(endpoint: string) => {
	const response = await instance.get(`${endpoint}`)
	return response.data as T
}

	// SEARCH
/**
 * @param { string } resource
 * @param { string } query
 * @param { number } page
 * @returns Promise 
 */

// Searches for a query on page nr. 
// export const search = async ( resource:string, query: string, page = 0) => {
// 	return get<SearchResponse>(`${resource}/search?query=${query}&page=${page}`)
// }