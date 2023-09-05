import { PeopleTypes } from "../types"
import { useState, useEffect } from "react"
import * as StarWarsAPI from "../services/StarWarsAPI"

const useGetAllPeople = () => {
    const [allPeople, setAllPeople] = useState<PeopleTypes|null>(null)
    const [error, setError] = useState<string|null>(null)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

    const getThePeople = async () => {
        setError(null)
		setIsError(false)
		setIsLoading(true)
        
        try{
            const res = await StarWarsAPI.getAllPeople()
            const data = res.data
            setAllPeople(data)

        }catch(err:any){
            setError(err.message)
            setIsError(true)
        }

        setIsLoading(false)
    }
    useEffect(() => {
        getThePeople()
	}, [])
    
    return {
        allPeople,
        error,
		isError,
		isLoading,
    }
}

export default useGetAllPeople