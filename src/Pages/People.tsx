import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useParams } from "react-router"
import { PeopleResponse, PeopleType } from '../types'
import useGetAllData from '../hooks/useGetAllData'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'
import { Alert } from 'react-bootstrap'


const People = () => {
	const { id } = useParams()
	const dataId = Number(id)
	const [page, setPage] = useState(0)
	const { allData, isError, isLoading, error } = useGetAllData<PeopleResponse>(`/people?page=${page}`)
	
	console.log("pagenr", page)
	console.log("data",allData)

	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>People</h1>

			{isLoading && <p className='d-flex align-content-center justify-content-center'>INSERT LOADING ICON HERE</p>}

			{isError === true && <Alert variant="warning">{error}</Alert>}

			{allData && (
				<>
					<div>
						<p className='d-flex align-content-center justify-content-center'>People of the jedi-verse</p>
						<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
							{allData.data.map((person:PeopleType) => {
								return(
									<Card className='m-3' style={{ width: '25%' }} key={person.id}>
										<Card.Header className='mb-2'>{person.name}</Card.Header>
										<Card.Body>
											<Card.Text>Homeworld: {person.homeworld.name}</Card.Text>
											<Card.Text>Birth year: {person.birth_year}</Card.Text>
											<Card.Text></Card.Text>	
										</Card.Body>
										<Card.Link as={Link} to={"/people/"+person.id}>
										<Button className='m-3' disabled={isLoading} variant="outline-secondary">Read More</Button>
										</Card.Link>
									</Card>
								)
							})}
						</div>
					</div>
					<div className='m-5'>
						<Pagination
							page={page + 1}
							totalPages={allData.last_page}
							hasPreviousPage={page > 0}
							hasNextPage={page + 1 < allData.last_page}
							onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}
							onNextPage={() => {setPage(prevValue => prevValue + 1)}}
						/>
					</div>
				</>
			)}
		</>
	)
}

export default People