import * as StarWarsAPI from '../services/StarWarsAPI'
import { FilmTypes } from '../types'
import { useState, useEffect } from "react"


const useGetAllFilms = () => {
    const [allFilms, setAllFilms] = useState<FilmTypes|null>(null)
    const [error, setError] = useState<string|null>(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
    
    const getAllTheFilms = async () => {
        setError(null)
		setIsError(false)
		setIsLoading(true)
        try{
            const res = await StarWarsAPI.getAllFilms()
            const dataFilm = res.data
            setAllFilms(dataFilm)
        }catch(err:any){
            setError(err.message)
            setIsError(true)
        }

        setIsLoading(false)
    }
    
    useEffect(() => {
        getAllTheFilms()
	}, [])
    
    return {
        allFilms,
        error,
		isError,
		isLoading,
    }
}

export default useGetAllFilms