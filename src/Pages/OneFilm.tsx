import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelType, OneFilmResponse } from "../types"
import { Link } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

const OneFilm = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, 
            isLoading, 
            isError, 
            error } = useGetOneObject<OneFilmResponse>(`films/${dataId}`)
	
	return(
		<>
			{isLoading && <Spinner className='spinner d-flex align-content-center justify-content-center' animation="grow" variant="alert"/>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
                <>
                    <div className='d-flex flex-column text-center align-content-center justify-content-center'>
                        <h1 className='mb-5 mt-5'>{Data.title}</h1>
                        <p style={{minWidth: '250px'}}>{Data.opening_crawl}</p>
                        <h2 className="p-4 text-center">General information</h2>
                        <p style={{textTransform: 'capitalize'}}>Released: {Data.release_date}</p>
                        <p style={{textTransform: 'capitalize'}}>Director: {Data.director}</p>
                        <p style={{textTransform: 'capitalize'}}>Producer: {Data.producer}</p>
                        <div className="p-2 list-group d-flex flex-column align-content-center justify-content-center">
                            <ListGroup>
                                <div className="p-2 d-flex flex-column text-center align-content-center justify-content-center">
                                    {Data.characters.length > 0 && (
                                        <>
                                            <h2 className="d-flex text-center align-content-center justify-content-center" key={Data.id}>Characters: </h2>
                                            <ListGroup className="d-flex text-center align-content-center justify-content-center" style={{minWidth: '200px', maxWidth: '400px'}}>
                                                {Data.characters.map((data:ModelType) => 
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
                            </ListGroup>
                            <ListGroup>
                                <div className="p-2 d-flex flex-column text-center align-content-center justify-content-center">
                                    {Data.vehicles.length > 0 && (
                                        <>
                                            <h2 className="d-flex text-center align-content-center justify-content-center" key={Data.id}>Vehicles: </h2>
                                            <ListGroup className="d-flex text-center align-content-center justify-content-center" style={{minWidth: '200px', maxWidth: '400px'}}>
                                                {Data.vehicles.map((data:ModelType) => 
                                                    <ListGroup.Item 
                                                        className="item"
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
                                <div className="p-2 d-flex flex-column text-center align-content-center justify-content-center">
                                    {Data.planets.length > 0 && (
                                        <>
                                            <h2 key={Data.id}>Planets: </h2>
                                            <ListGroup className="d-flex text-center align-content-center justify-content-center" style={{minWidth: '200px', maxWidth: '400px'}}>
                                                {Data.planets.map((data:ModelType) => 
                                                    <ListGroup.Item 
                                                        className="item"
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
                                <div className="p-2 d-flex flex-column text-center align-content-center justify-content-center">
                                    {Data.vehicles.length > 0 && (
                                        <>
                                            <h2 key={Data.id}>Species: </h2>
                                            <ListGroup className="d-flex text-center align-content-center justify-content-center" style={{minWidth: '200px', maxWidth: '400px'}}>
                                                {Data.species.map((data:ModelType) => 
                                                    <ListGroup.Item 
                                                        className="item"
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
                                <div className="p-2 d-flex flex-column text-center align-content-center justify-content-center">
                                    {Data.starships.length > 0 && (
                                        <>
                                            <h2 key={Data.id}>Starships: </h2>
                                            <ListGroup className="d-flex text-center align-content-center justify-content-center" style={{minWidth: '200px', maxWidth: '400px'}}>
                                                {Data.starships.map((data:ModelType) => 
                                                    <ListGroup.Item 
                                                        className="item"
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
                            <p className="muted">Created: {Data.created}</p>
                            <p className="muted">Edited: {Data.edited}</p>
                        </div>
			    </>
			)}
		</>
	
	)
	}

export default OneFilm