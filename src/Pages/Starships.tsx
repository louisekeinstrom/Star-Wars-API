import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllData from '../hooks/useGetAllData'
import { Alert } from 'react-bootstrap'
import { StarshipsResponse, StarshipsType } from '../types'
import { Card } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import { useState } from 'react'

const Starships = () => {
	const [page, setPage] = useState(1)
	const { allData, 
			isLoading, 
			isError, 
			error } = useGetAllData<StarshipsResponse>(`/starships?page=${page}`)
	console.log("pagenr", page)
	console.log("data",allData)

	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Starships</h1>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allData && (
				<>
					<p className='d-flex align-content-center justify-content-center'>Have a look at all the Starships!</p>
					<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
						{allData.data.map((Starships:StarshipsType) => {
							return(
								<Card className='m-3' style={{ width: '25%' }} key={Starships.id}>
									<Card.Header className='mb-2'>{Starships.name}</Card.Header>
									<Card.Body>
										<Card.Text>Model: {Starships.model}</Card.Text>
										<Card.Text>Hyperdrive Rating: {Starships.hyperdrive_rating}</Card.Text>
									</Card.Body>
									<Card.Link as={Link} to={"/starships/"+Starships.id}>
										<Button className='m-3' 
												disabled={isLoading} 
												variant="outline-secondary">
													Read More
										</Button>
									</Card.Link>
								</Card>
							)
						})}
					</div>
					<div className='m-5'>
						<Pagination
							page={page + 1}
							totalPages={allData.last_page}
							hasPreviousPage={page > 0}
							hasNextPage={page + 1 < allData.last_page}
							onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}
							onNextPage={() => { setPage(prevValue => prevValue + 1) }}
						/>
					</div>
				</>
			)}
		</>
	)
}

export default Starships