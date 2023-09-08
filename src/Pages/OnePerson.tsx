import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelFilmType, ModelType, OnePersonResponse } from "../types"
import { Link } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

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
			{isLoading && <Spinner className='spinner d-flex align-content-center justify-content-center' animation="grow" variant="alert"/>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
                <>
			        <div className='d-flex flex-column text-center align-content-center justify-content-center'>
			            <h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>{Data.name}</h1>
                        <h2 className="p-4 text-center">Personal information</h2>
                        <p>Birth year: {Data.birth_year}</p>
                        <p style={{textTransform: 'capitalize'}}>Eye color: {Data.eye_color}</p>
                        <p style={{textTransform: 'capitalize'}}>Hair color: {Data.hair_color}</p>
                        <p>Height: {Data.height} cm</p>
                        <p>Mass: {Data.mass} kg</p>
                        <p style={{textTransform: 'capitalize'}}>Skin color: {Data.skin_color}</p>
                        <p style={{textTransform: 'capitalize'}}>Hair color: {Data.hair_color}</p>
                        {!Data.homeworld === null && (<p>Homeworld: {Data.homeworld!.name}</p>)}
                        <div className="p-2 list-group d-flex flex-column align-content-center justify-content-center">
                            <ListGroup>
                                <div className="p-2 d-flex flex-column text-center align-content-center justify-content-center">
                                    {Data.films.length > 0 && (
                                        <>
                                            <h2 className="d-flex text-center align-content-center justify-content-center" key={Data.id}>Films: </h2>
                                            <ListGroup className="d-flex text-center align-content-center justify-content-center" style={{minWidth: '200px', maxWidth: '400px'}}>
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
                            </ListGroup>
                            <ListGroup>
                                <div className="p-2 d-flex flex-column text-center align-content-center justify-content-center">
                                    {Data.species.length > 0 && (
                                        <>
                                            <h2 className="d-flex text-center align-content-center justify-content-center" key={Data.id}>Species: </h2>
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
                                            <h2 className="d-flex text-center align-content-center justify-content-center" key={Data.id}>Starships: </h2>
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
                        </div>
                        <p className="muted">Created: {Data.created}</p>
                        <p className="muted">Edited: {Data.edited}</p>
		            </div>
			    </>
			)}
		</>
	)
}

export default OnePerson