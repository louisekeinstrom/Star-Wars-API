import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelType, OneVehicleResponse, ModelFilmType } from "../types"
import { Link } from "react-router-dom"


const OneVehicle = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, 
            isLoading, 
            isError, 
            error } = useGetOneObject<OneVehicleResponse>(`starships/${dataId}`)
	
	return(
		<>
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
                <>
			        <h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>{Data.name}</h1>
			        <div className='d-flex-column m-2 justify-content-center'>
                        <div>
                        <p>Model: {Data.model}</p>
                        <p>Vehicle Class: {Data.vehicle_class}</p>
                        <p>Manufacturer: {Data.manufacturer}</p>
                        <p>Cost in Credits: {Data.cost_in_credits} Credits</p>
                        <p>Length: {Data.length}</p>
                        <p>Crew: {Data.crew}</p>
                        <p>Passengers: {Data.passengers}</p>
                        <p>Max atmosphering speed: {Data.max_atmosphering_speed}</p>
                        <p>Cargo capacity: {Data.cargo_capacity}</p>
                        <p>Consumables: {Data.consumables}</p>
                        <p>Created: {Data.created}</p>
                        <p>Edited: {Data.edited}</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-center flex-wrap m-5">
                            <div className="m-5">
                                {Data.films.length > 0 && (
                                    <>
                                        <h2 key={Data.id}>Films: </h2>
                                        <ListGroup className="m-2">
                                            {Data.films.map((data:ModelFilmType) => 
                                                <ListGroup.Item 
                                                    className="m-3"
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
                                                className="m-3"
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
		            </div>
			    </>
			)}
		</>
	)
}

export default OneVehicle