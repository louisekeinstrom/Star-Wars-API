import * as StarWarsAPI from '../services/StarWarsAPI'
import { StarshipsTypes } from '../types'
import { useState, useEffect } from "react"

const useGetAllStarships = () => {
    const [ allStarships, setAllStarships ] = useState<StarshipsTypes|null>(null)
    const [error, setError] = useState<string|null>(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
    
    const getAllTheStarships = async () => {
        setError(null)
		setIsError(false)
		setIsLoading(true)
        try{
            const res = await StarWarsAPI.getAllStarships()
            const data = res.data
            setAllStarships(data)
        }catch(err:any){
            setError(err.message)
            setIsError(true)
        }

        setIsLoading(false)
    }
    
    useEffect(() => {
        getAllTheStarships()
	}, [])
    
    return {
        allStarships,
        error,
		isError,
		isLoading,
    }
}

export default useGetAllStarships