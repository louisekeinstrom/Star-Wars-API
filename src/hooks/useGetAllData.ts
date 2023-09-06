import * as StarWarsAPI from '../services/StarWarsAPI'
import { useState, useEffect } from "react"


const useGetAllData = <T>(endpoint:string) => {
    const [allData, setAllData] = useState< T | null >(null)
    const [error, setError] = useState< string | null >(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
    
    const getAllTheData = async () => {
        setError(null)
		setIsError(false)
		setIsLoading(true)
        
        try{
            const res = await StarWarsAPI.getAllData<T>(endpoint)
            setAllData(res)
        }catch(err:any){
            setError(err.message)
            setIsError(true)
        }

        setIsLoading(false)
    }
    
    useEffect(() => {
        getAllTheData()
	}, [])
    
    return {
        allData,
        error,
		isError,
		isLoading,
    }
}

export default useGetAllData