import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllStarships from '../hooks/useGetAllStarships'
import { Alert } from 'react-bootstrap'
import { StarshipsType } from '../types'
import { Card } from 'react-bootstrap'

const Starships = () => {
	const { allStarships, isLoading, isError, error } = useGetAllStarships()
	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Starships</h1>
			<div className='d-flex-column m-2 justify-content-center'>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allStarships && (
				<>
			<p className='d-flex align-content-center justify-content-center'>Have a look at all the Starships!</p>
			<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
				{allStarships.map((Starships:StarshipsType) => {
					return(
						<Card className='m-3' style={{ width: '25%' }}>
							<Card.Header className='mb-2'>{Starships.name}</Card.Header>
							<Card.Body>
								<Card.Text>Model: {Starships.model}</Card.Text>
								<Card.Text>Hyperdrive Rating: {Starships.hyperdrive_rating}</Card.Text>
								<Card.Text></Card.Text>	
							</Card.Body>
							<Card.Link as={Link} to={"/starships/"+Starships.id}>
							<Button className='m-3' disabled={isLoading} variant="outline-secondary">Read More</Button>
							</Card.Link>
						</Card>
					)
				})}
			</div>
			</>
			)
			}
		</div>
		</>
	)
}

export default Starships