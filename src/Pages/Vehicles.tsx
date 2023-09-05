import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllVehicles from '../hooks/useGetAllVehicles'
import { Alert } from 'react-bootstrap'
import { VehiclesType } from '../types'
import { Card } from 'react-bootstrap'

const Vehicles = () => {
	const { allVehicles, isLoading, isError, error } = useGetAllVehicles()
	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Vehicles</h1>
			<div className='d-flex-column m-2 justify-content-center'>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allVehicles && (
				<>
			<p className='d-flex align-content-center justify-content-center'>Have a look at all the Vehicles!</p>
			<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
				{allVehicles.map((Vehicles:VehiclesType) => {
					return(
						<Card className='m-3' style={{ width: '25%' }}>
							<Card.Header className='mb-2'>{Vehicles.name}</Card.Header>
							<Card.Body>
								<Card.Text>Model: {Vehicles.model}</Card.Text>
								<Card.Text>Max Atmosphering Speed: {Vehicles.max_atmosphering_speed}</Card.Text>
								<Card.Text></Card.Text>	
							</Card.Body>
							<Card.Link as={Link} to={"/vehicles/"+Vehicles.id}>
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

export default Vehicles