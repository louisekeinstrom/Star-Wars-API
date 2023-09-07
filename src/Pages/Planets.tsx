import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllData from '../hooks/useGetAllData'
import { Alert } from 'react-bootstrap'
import { PlanetResponse, PlanetType } from '../types'
import { Card } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Planets = () => {
	const [page, setPage] = useState(1)
	const { allData, 
			isLoading, 
			isError, 
			error } = useGetAllData<PlanetResponse>(`/planets?page=${page}`)
	console.log("pagenr", page)
	console.log("data",allData)

	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Planets</h1>
			
			{isLoading && <Spinner className='d-flex align-content-center justify-content-center' animation="grow" variant="dark"/>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allData && (
				<>
					<div className='m-2'>
						<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
							{allData.data.map((planet:PlanetType) => {
								return(
									<Card className='Star-Wars-Card m-3' style={{ width: '25%' }} key={planet.id}>
										<Card.Header className='Star-Wars-Text mb-2'>{planet.name}</Card.Header>
										<Card.Body>
											<Card.Text style={{textTransform: 'capitalize'}}>Climate: {planet.climate}</Card.Text>
											<Card.Text>Population: {planet.population}</Card.Text>
											<Card.Text></Card.Text>	
										</Card.Body>
										<Card.Link as={Link} to={"/planets/"+planet.id}>
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
						<div className='m-5'>
							<Pagination
								page={page}
								totalPages={allData.last_page}
								hasPreviousPage={page > 0}
								hasNextPage={page + 1 < allData.last_page}
								onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}
								onNextPage={() => { setPage(prevValue => prevValue + 1) }}
							/>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Planets