import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelType, OneFilmResponse } from "../types"
import { Link } from "react-router-dom"


const OneFilm = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, 
            isLoading, 
            isError, 
            error } = useGetOneObject<OneFilmResponse>(`films/${dataId}`)
	
	return(
		<>
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
                <>
			        <h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>{Data.title}</h1>
			        <div className='d-flex-column m-2 justify-content-center'>
			            <div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
                            <p>{Data.opening_crawl}</p>
			            </div>
                        <div>
                            <p>Released: {Data.release_date}</p>
                            <p>Director: {Data.director}</p>
                            <p>Producer: {Data.producer}</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-center flex-wrap m-5">
                            <ListGroup>
                                <div className="m-5">
                                    {Data.characters.length > 0 && (
                                        <>
                                            <h2 key={Data.id}>Characters: </h2>
                                            <ListGroup className="m-2">
                                                {Data.characters.map((data:ModelType) => 
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
                            </ListGroup>
                            <ListGroup>
                                <div className="m-5">
                                    {Data.vehicles.length > 0 && (
                                        <>
                                            <h2 key={Data.id}>Vehicles: </h2>
                                            <ListGroup className="m-2">
                                                {Data.vehicles.map((data:ModelType) => 
                                                    <ListGroup.Item 
                                                        className="m-3"
                                                        action
                                                        as={Link}
                                                        key={data.id}
                                                        to={"/vehicles/" + data.id}>{data.name}
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </>
                                    )}
                                </div>
                            </ListGroup>
                            <ListGroup>
                                <div className="m-5">
                                    {Data.planets.length > 0 && (
                                        <>
                                            <h2 key={Data.id}>Planets: </h2>
                                            <ListGroup className="m-2">
                                                {Data.planets.map((data:ModelType) => 
                                                    <ListGroup.Item 
                                                        className="m-3"
                                                        action
                                                        as={Link}
                                                        key={data.id}
                                                        to={"/planets/" + data.id}>{data.name}
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </>
                                    )}
                                </div>
                            </ListGroup>
                            <ListGroup>
                                <div className="m-5">
                                    {Data.vehicles.length > 0 && (
                                        <>
                                            <h2 key={Data.id}>Species: </h2>
                                            <ListGroup className="m-2">
                                                {Data.species.map((data:ModelType) => 
                                                    <ListGroup.Item 
                                                        className="m-3"
                                                        action
                                                        as={Link}
                                                        key={data.id}
                                                        to={"/species/" + data.id}>{data.name}
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </>
                                    )}
                                </div>
                            </ListGroup>
                            <ListGroup>
                                <div className="m-5">
                                    {Data.starships.length > 0 && (
                                        <>
                                            <h2 key={Data.id}>Starships: </h2>
                                            <ListGroup className="m-2">
                                                {Data.starships.map((data:ModelType) => 
                                                    <ListGroup.Item 
                                                        className="m-3"
                                                        action
                                                        as={Link}
                                                        key={data.id}
                                                        to={"/starships/" + data.id}>{data.name}
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </>
                                    )}
                                </div>
                            </ListGroup>
                        </div>
		            </div>
			    </>
			)}
		</>
	
	)
	}

export default OneFilm