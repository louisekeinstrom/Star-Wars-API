import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, Card, ListGroup } from "react-bootstrap"
import { ModelType, OneFilmResponse } from "../types"
import { Link } from "react-router-dom"


const OneFilm = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, isLoading, isError, error } = useGetOneObject<OneFilmResponse>(`films/${dataId}`)
	
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
                            <h2>Characters: </h2>
                            {Data.characters.map((data:ModelType) => <ListGroup.Item as={Link} to={"/character/" + data.id} key={data.id}>{data.name}</ListGroup.Item>)}
                        </div>
                            </ListGroup>
                            <ListGroup>
                        <div className="m-5">
                            <h2>Vehicles: </h2>
                            {Data.vehicles.map((data:ModelType) => 
                            <ListGroup.Item 
                            action
                            as={Link} 
                            to={"/vehicles/" + data.id} key={data.id}>{data.name}</ListGroup.Item>)}
                        </div>
                            </ListGroup>
                            <ListGroup>
                        <div className="m-5">
                            <h2>Planets: </h2>
                            {Data.planets.map((data:ModelType) => 
                            <ListGroup.Item 
                                as={Link} 
                                action
                                to={"/planets/" + data.id} 
                                key={data.id}>{data.name}
                            </ListGroup.Item>)}
                        </div>
                            </ListGroup>
                            <ListGroup>
                        <div className="m-5">
                            <h2>Species: </h2>
                            {Data.species.map((data:ModelType) => 
                            <ListGroup.Item 
                                as={Link} 
                                action
                                to={"/species/" + data.id} 
                                key={data.id}>{data.name}
                            </ListGroup.Item>)}
                        </div>
                            </ListGroup>
                            <ListGroup>
                        <div className="m-5">
                            <h2>Starships: </h2>
                            {Data.starships.map((data:ModelType) => 
                            <ListGroup.Item 
                                as={Link} 
                                action
                                to={"/starships/" + data.id} 
                                key={data.id}>{data.name}
                            </ListGroup.Item>)}
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