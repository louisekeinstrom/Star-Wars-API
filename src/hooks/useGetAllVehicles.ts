import * as StarWarsAPI from '../services/StarWarsAPI'
import { VehiclesTypes } from '../types'
import { useState, useEffect } from "react"

const useGetAllVehicles = () => {
    const [ allVehicles, setAllVehicles ] = useState<VehiclesTypes|null>(null)
    const [error, setError] = useState<string|null>(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
    
    const getAllTheVehicles = async () => {
        setError(null)
		setIsError(false)
		setIsLoading(true)
        try{
            const res = await StarWarsAPI.getAllVehicles()
            const data = res.data
            setAllVehicles(data)
        }catch(err:any){
            setError(err.message)
            setIsError(true)
        }

        setIsLoading(false)
    }
    
    useEffect(() => {
        getAllTheVehicles()
	}, [])
    
    return {
        allVehicles,
        error,
		isError,
		isLoading,
    }
}

export default useGetAllVehicles