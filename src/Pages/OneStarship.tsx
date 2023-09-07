import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelFilmType, ModelType, OneStarshipResponse } from "../types"
import { Link } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

const OneStarship = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, isLoading, isError, error } = useGetOneObject<OneStarshipResponse>(`starships/${dataId}`)

	console.log(Data)
	
	return(
		<>
			{isLoading && <Spinner className='spinner d-flex align-content-center justify-content-center' animation="grow" variant="alert"/>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
                <>
                    <h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>{Data.name}</h1>
                    <div className='d-flex-column m-2 justify-content-center'>
                        <div className="information">
                            <h2>Starship Details</h2>
                            <p style={{textTransform: 'capitalize'}}>Model: {Data.model}</p>
                            <p style={{textTransform: 'capitalize'}}>Starship Class: {Data.starship_class}</p>
                            <p style={{textTransform: 'capitalize'}}>Manufacturer: {Data.manufacturer}</p>
                            <p style={{textTransform: 'capitalize'}}>Cost in Credits: {Data.cost_in_credits} Credits</p>
                            <p style={{textTransform: 'capitalize'}}>Length: {Data.length}</p>
                            <p style={{textTransform: 'capitalize'}}>Crew: {Data.crew}</p>
                            <p style={{textTransform: 'capitalize'}}>Passengers: {Data.passengers}</p>
                            <p style={{textTransform: 'capitalize'}}>Max atmosphering speed: {Data.max_atmosphering_speed}</p>
                            <p style={{textTransform: 'capitalize'}}>Hyperdrive rating: {Data.hyperdrive_rating}</p>
                            <p style={{textTransform: 'capitalize'}}>MGLT: {Data.MGLT}</p>
                            <p style={{textTransform: 'capitalize'}}>Cargo capacity: {Data.cargo_capacity}</p>
                            <p style={{textTransform: 'capitalize'}}>Consumables: {Data.consumables}</p>
                        </div>
                        <div className="list-group flex-wrap m-5">
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
                            <div className="m-5">
                                {Data.pilots.length > 0 && (
                                    <>
                                        <h2 key={Data.id}>Pilots: </h2>
                                        <ListGroup className="m-2">
                                        {Data.pilots.map((data:ModelType) => 
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
                        </div>
                        <p className="muted">Created: {Data.created}</p>
                        <p className="muted">Edited: {Data.edited}</p>
                    </div>
                </>
			)}
		</>
	)
}

export default OneStarship