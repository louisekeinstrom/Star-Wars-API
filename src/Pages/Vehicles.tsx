import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllData from '../hooks/useGetAllData'
import { Alert } from 'react-bootstrap'
import { VehiclesResponse, VehiclesType } from '../types'
import { Card } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import { useState } from 'react'

const Vehicles = () => {
	const { allData, isLoading, isError, error } = useGetAllData<VehiclesResponse>("vehicles")
	const [page, setPage] = useState(0)
	
	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Vehicles</h1>
			<div className='d-flex-column m-2 justify-content-center'>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allData && (
				<>
			<p className='d-flex align-content-center justify-content-center'>Have a look at all the Vehicles!</p>
			<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
				{allData.data.map((Vehicles:VehiclesType) => {
					return(
						<Card className='m-3' style={{ width: '25%' }} key={Vehicles.id}>
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
			<div className='m-5'>
				<Pagination
					page={allData.current_page}
					totalPages={allData.last_page}
					hasPreviousPage={page > 0}
					hasNextPage={page + 1 < allData.last_page}
					onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}
					onNextPage={() => { setPage(prevValue => prevValue + 1) }}
				/>
			</div>
			</>
			)}
		</div>
		</>
	)
}

export default Vehicles