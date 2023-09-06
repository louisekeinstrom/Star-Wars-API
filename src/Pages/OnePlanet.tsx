import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelType, OnePlanetResponse, ResidentsType, ResidentsTypes } from "../types"
import { Link } from "react-router-dom"



const OnePlanet = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, isLoading, isError, error } = useGetOneObject<OnePlanetResponse>(`/planets/${dataId}`)
	
	return(
		<>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
            <>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>{Data.name}</h1>
			<div className='d-flex-column m-2 justify-content-center'>
                <div>
                    <p>Rotation period: {Data.rotation_period}</p>
                    <p>Orbital period: {Data.orbital_period}</p>
                    <p>Diameter: {Data.diameter}</p>
                    <p>Climate: {Data.climate}</p>
                    <p>Gravity: {Data.gravity} kg</p>
                    <p>Terrain: {Data.terrain}</p>
                    <p>Surface water: {Data.surface_water}</p>
                    <p>Population: {Data.population}</p>
                </div>
                    <div className="d-flex align-content-center justify-content-center flex-wrap m-5">

                        <div className="m-5">
                        {Data.residents.length > 0 &&<h2 key={Data.id}>Residents: </h2>}
                            <ListGroup>
                                {Data.residents.length > 0 && ( 
                                    Data.residents.map((data:ResidentsType) => 
                                    <ListGroup.Item 
                                        action
                                        as={Link}
                                        key={data.id}
                                        to={"/people/" + data.id}>{data.name}</ListGroup.Item>
                                    ))}
                                    </ListGroup>
                        </div>
                        <div className="m-5">
                            <h2>Films: </h2>
                            {Data.residents.length > 0 && Data.films.map((data:ModelType) => <p>{data.name}</p>)}
                        </div>
                    </div>
		        </div>
			</>
			)}
		</>
	
	)
	}

export default OnePlanet