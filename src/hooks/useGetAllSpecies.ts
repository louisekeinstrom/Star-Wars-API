import * as StarWarsAPI from '../services/StarWarsAPI'
import { SpeciesTypes } from '../types'
import { useState, useEffect } from "react"

const useGetAllSpecies = () => {
    const [ allSpecies, setAllSpecies ] = useState<SpeciesTypes|null>(null)
    const [error, setError] = useState<string|null>(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
    
    const getAllTheSpecies = async () => {
        setError(null)
		setIsError(false)
		setIsLoading(true)
        try{
            const res = await StarWarsAPI.getAllSpecies()
            const data = res.data
            setAllSpecies(data)
        }catch(err:any){
            setError(err.message)
            setIsError(true)
        }

        setIsLoading(false)
    }
    
    useEffect(() => {
        getAllTheSpecies()
	}, [])
    
    return {
        allSpecies,
        error,
		isError,
		isLoading,
    }
}

export default useGetAllSpecies