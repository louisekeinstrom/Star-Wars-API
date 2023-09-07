import * as StarWarsAPI from '../services/StarWarsAPI'
import { useState, useEffect } from "react"

const useGetOneObject = <T>(endpoint:string) => {
    const [Data, setData] = useState<T|null>(null)
    const [error, setError] = useState<string|null>(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
    
    const getAnObject = async () => {
        setError(null)
		setIsError(false)
		setIsLoading(true)
        
        try{
            const res = await StarWarsAPI.getData<T>(endpoint)
            setData(res)
        }catch(err:any){
            setError(err.message)
            setIsError(true)
        }

        setIsLoading(false)
    }
    
    useEffect(() => {
        getAnObject()
	}, [])
    
    return {
        Data,
        error,
		isError,
		isLoading,
    }
}

export default useGetOneObject