import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelFilmType, ModelType, OnePersonResponse } from "../types"
import { Link } from "react-router-dom"

const OnePerson = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, 
            isLoading, 
            isError, 
            error } = useGetOneObject<OnePersonResponse>(`people/${dataId}`)
    

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
                            <p style={{textTransform: 'capitalize'}}>Eye color: {Data.eye_color}</p>
                            <p style={{textTransform: 'capitalize'}}>Hair color: {Data.hair_color}</p>
                            <p>Height: {Data.height} cm</p>
                            <p>Mass: {Data.mass} kg</p>
                            <p style={{textTransform: 'capitalize'}}>Skin color: {Data.skin_color}</p>
                            <p style={{textTransform: 'capitalize'}}>Hair color: {Data.hair_color}</p>
                            {!Data.homeworld === null && (<p>Homeworld: {Data.homeworld!.name}</p>)}
                        </div>
                        <div className="d-flex align-content-center justify-content-center flex-wrap m-5">
                            <ListGroup>
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
                            </ListGroup>
                            <ListGroup>
                                <div className="m-5">
                                    {Data.species.length > 0 && (
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
                        </div>
		            </div>
			    </>
			)}
		</>
	)
}

export default OnePerson