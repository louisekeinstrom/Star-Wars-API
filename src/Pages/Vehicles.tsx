import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllData from '../hooks/useGetAllData'
import { Alert } from 'react-bootstrap'
import { VehiclesResponse, VehiclesType } from '../types'
import { Card } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Vehicles = () => {
	const [page, setPage] = useState(1)
	const { allData, 
			isLoading, 
			isError, 
			error } = useGetAllData<VehiclesResponse>(`/vehicles?page=${page}`)

	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Vehicles</h1>
			<div className='d-flex-column m-2 justify-content-center'>

			{isLoading && <Spinner className='spinner d-flex align-content-center justify-content-center' animation="grow" variant="alert"/>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allData && (
				<>
					<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
						{allData.data.map((Vehicles:VehiclesType) => {
							return(
								<Card className='d-flex flex-wrap Star-Wars-Card m-3' style={{ width: '25%', minWidth: '250px' }} key={Vehicles.id}>
									<Card.Header className='Star-Wars-Text mb-2'>{Vehicles.name}</Card.Header>
									<Card.Body>
										<Card.Text>Model: {Vehicles.model}</Card.Text>
										<Card.Text>Max Atmosphering Speed: {Vehicles.max_atmosphering_speed} km</Card.Text>
									</Card.Body>
									<Card.Link as={Link} to={"/vehicles/"+ Vehicles.id}>
										<Button className='read-more-btn m-3' 
												disabled={isLoading} 
												variant="outline-secondary">
													Read More
										</Button>
									</Card.Link>
								</Card>
							)
						})}
					</div>
					<div className='p-3 m-5 d-flex flex-row justify-content-center align-content-center'>
						<Pagination
							pageNumb={allData.current_page}
							totalPages={allData.last_page}
							hasPreviousPage={page > 1}
							hasNextPage={page < allData.last_page}
							onPreviousPage={() => { setPage(preValue => preValue - 1) }}
							onNextPage={() => { setPage(preValue => preValue + 1) }}
						/>
					</div>
				</>
			)}
			</div>
		</>
	)
}

export default Vehicles