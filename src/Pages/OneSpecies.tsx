import { useParams } from "react-router"
import useGetOneObject from "../hooks/useGetOneObject"
import { Alert, ListGroup } from "react-bootstrap"
import { ModelFilmType, ModelType, OneSpeciesResponse } from "../types"
import { Link } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

const OneSpecies = () => {
    const { id } = useParams()
	const dataId = Number(id)
	const { Data, 
            isLoading, 
            isError, 
            error } = useGetOneObject<OneSpeciesResponse>(`species/${dataId}`)

	return(
		<>
			{isLoading && <Spinner className='spinner d-flex align-content-center justify-content-center' animation="grow" variant="alert"/>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{Data && (
                <>
			        <div className='d-flex flex-column text-center align-content-center justify-content-center'>
			            <h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>{Data.name}</h1>
                        <h2 className="p-4 text-center">Species information</h2>
                        <p style={{textTransform: 'capitalize'}}>Classification: {Data.classification}</p>
                        <p style={{textTransform: 'capitalize'}}>Designation: {Data.designation}</p>
                        <p>Average height: {Data.average_height} cm</p>
                        <p>Average Lifespan: {Data.average_lifespan} years</p>
                        <p style={{textTransform: 'capitalize'}}>Eye colors: {Data.eye_colors}</p>
                        <p style={{textTransform: 'capitalize'}}>Skin colors: {Data.skin_colors}</p>
                        <p style={{textTransform: 'capitalize'}}>Hair colors: {Data.hair_colors}</p>
                        <p style={{textTransform: 'capitalize'}}>Language: {Data.language}</p>
                        {!Data.homeworld === null && (<p>Homeworld: {Data.homeworld!.name}</p>)}
                        <div className="p-2 list-group d-flex flex-column align-content-center justify-content-center">
                            <ListGroup>
                                <div className="p-2 d-flex flex-column text-center align-content-center justify-content-center">
                                    {Data.people.length > 0 && (
                                        <>
                                            <h2 className="d-flex text-center align-content-center justify-content-center" key={Data.id}>People: </h2>
                                            <ListGroup className="d-flex text-center align-content-center justify-content-center" style={{minWidth: '200px', maxWidth: '400px'}}>
                                                {Data.people.map((data:ModelType) => 
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
                        </div>
                        <p className="muted">Created: {Data.created}</p>
                        <p className="muted">Edited: {Data.edited}</p>
		            </div>
			    </>
			)}
		</>
	)
}

export default OneSpecies