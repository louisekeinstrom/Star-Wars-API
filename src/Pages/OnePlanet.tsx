import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelFilmType, OnePlanetResponse, ResidentsType } from "../types"
import { Link } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

const OnePlanet = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, 
            isLoading, 
            isError, 
            error } = useGetOneObject<OnePlanetResponse>(`/planets/${dataId}`)
	
	return(
		<>
			{isLoading && <Spinner className='d-flex align-content-center justify-content-center' animation="grow" variant="dark"/>}
			
			{isError && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
                <>
			        <h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>{Data.name}</h1>
			        <div className='d-flex-column m-2 justify-content-center'>
                        <div className="information">
                            <h2>Planetary information</h2>
                            <p style={{textTransform: 'capitalize'}}>Rotation period: {Data.rotation_period}</p>
                            <p style={{textTransform: 'capitalize'}}>Orbital period: {Data.orbital_period}</p>
                            <p style={{textTransform: 'capitalize'}}>Diameter: {Data.diameter}</p>
                            <p style={{textTransform: 'capitalize'}}>Climate: {Data.climate}</p>
                            <p>Gravity: {Data.gravity} kg</p>
                            <p style={{textTransform: 'capitalize'}}>Terrain: {Data.terrain}</p>
                            <p style={{textTransform: 'capitalize'}}>Surface water: {Data.surface_water}</p>
                            <p style={{textTransform: 'capitalize'}}>Population: {Data.population}</p>
                        </div>
                        <div className="list-group flex-wrap m-5">
                            <div className="m-5">
                                {Data.residents.length > 0 && (
                                    <>
                                        <h2 key={Data.id}>Residents: </h2>
                                        <ListGroup className="m-2">
                                            {Data.residents.map((data:ResidentsType) => 
                                                <ListGroup.Item 
                                                    className="item"
                                                    action
                                                    as={Link}
                                                    key={data.id}
                                                    to={"/people/" + data.id}>{data.name}
                                                </ListGroup.Item>
                                            )}
                                        </ListGroup>
                                    </>
                                )}
                            </div>
                            <div className="m-5">
                                {Data.films.length > 0 && (
                                    <>
                                        <h2 key={Data.id}>Films: </h2>
                                        <ListGroup className="m-2">
                                            {Data.films.map((data:ModelFilmType) => 
                                                <ListGroup.Item 
                                                    className="item"
                                                    action
                                                    as={Link}
                                                    key={data.id}
                                                    to={"/films/" + data.id}>{data.title}
                                                </ListGroup.Item>
                                            )}
                                        </ListGroup>
                                    </>
                                )}
                            </div>
                        </div>
                        <p className="muted">Created: {Data.created}</p>
                        <p className="muted">Edited: {Data.edited}</p>
		            </div>
			    </>
			)}
		</>
	)
}

export default OnePlanet