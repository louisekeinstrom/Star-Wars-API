import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { ModelType, OnePersonResponse } from "../types"
import { Link } from "react-router-dom"


const OnePerson = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, isLoading, isError, error } = useGetOneObject<OnePersonResponse>(`people/${dataId}`)


	console.log(Data)
	
	return(
		<>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
            <>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>{Data.name}</h1>
			<div className='d-flex-column m-2 justify-content-center'>
                <div>
                    <p>Birth year: {Data.birth_year}</p>
                    <p>Eye color: {Data.eye_color}</p>
                    <p>Hair color: {Data.hair_color}</p>
                    <p>Hair color: {Data.height} cm</p>
                    <p>Mass: {Data.mass} kg</p>
                    <p>Skin color: {Data.skin_color}</p>
                    <p>Hair color: {Data.hair_color}</p>
                    <p>Homeworld: {Data.homeworld.name}</p>
                </div>
                    <div className="d-flex align-content-center justify-content-center flex-wrap m-5">
                        <ListGroup>
                        <div className="m-5">
                            <h2>Films: </h2>
                            {Data.films.map((data:ModelType) => 
                            <ListGroup.Item 
                                as={Link}
                                action
                                to={"/films/" + data.id} 
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
                            <ListGroupItem 
                                as={Link} 
                                to={"/starships/" + data.id} 
                                key={data.id}>{data.name}
                            </ListGroupItem>)}
                        </div>
                            </ListGroup>
                        <ListGroup>
                        <div className="m-5">
                            <h2>Vehicles: </h2>
                            {Data.vehicles.map((data:ModelType) => 
                            <ListGroupItem 
                                as={Link} 
                                to={"/vehicles/" + data.id} 
                                key={data.id}>{data.name}
                            </ListGroupItem>)}
                        </div>
                            </ListGroup>
                    </div>
		        </div>
			</>
			)}
		</>
	
	)
	}

export default OnePerson