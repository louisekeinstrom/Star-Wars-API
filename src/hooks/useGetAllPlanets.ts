import * as StarWarsAPI from '../services/StarWarsAPI'
import { PlanetTypes } from '../types'
import { useState, useEffect } from "react"


const useGetAllPlanets = () => {
    const [allPlanets, setAllPlanets] = useState<PlanetTypes|null>(null)
    const [error, setError] = useState<string|null>(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
    
    const getAllThePlanets = async () => {
        setError(null)
		setIsError(false)
		setIsLoading(true)
        
        try{
            const res = await StarWarsAPI.getAllPlanets()
            const dataFilm = res.data
            setAllPlanets(dataFilm)

        }catch(err:any){
            setError(err.message)
            setIsError(true)
        }

        setIsLoading(false)
    }
    
    useEffect(() => {
        getAllThePlanets()
	}, [])
    
    return {
        allPlanets,
        error,
		isError,
		isLoading,
    }
}

export default useGetAllPlanets