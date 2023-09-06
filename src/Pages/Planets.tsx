import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllData from '../hooks/useGetAllData'
import { Alert } from 'react-bootstrap'
import { PlanetResponse, PlanetType } from '../types'
import { Card } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import { useState } from 'react'

const Planets = () => {
	const { allData, isLoading, isError, error } = useGetAllData<PlanetResponse>("planets")
	const [page, setPage] = useState(0)


	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Planets</h1>
			<div className='d-flex-column m-2 justify-content-center'>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allData && (
			<>
			<div className='m-2'>
			<p className='d-flex align-content-center justify-content-center'>Have a look at all the planets!</p>
			<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
				{allData.data.map((planet:PlanetType) => {
					return(
						<Card className='m-3' style={{ width: '25%' }} key={planet.id}>
							<Card.Header className='mb-2'>{planet.name}</Card.Header>
							<Card.Body>
								<Card.Text>Climate: {planet.climate}</Card.Text>
								<Card.Text>Population: {planet.population}</Card.Text>
								<Card.Text></Card.Text>	
							</Card.Body>
							<Card.Link as={Link} to={"/planets/"+planet.id}>
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
			</div>
			</>
			)}
		</div>
		</>
	)
}

export default Planets