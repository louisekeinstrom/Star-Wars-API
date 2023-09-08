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