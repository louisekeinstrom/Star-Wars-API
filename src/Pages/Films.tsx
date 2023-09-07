import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllData from '../hooks/useGetAllData'
import { FilmResponse, FilmType } from '../types'
import { Card, Alert } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import { useState } from "react"
import Spinner from 'react-bootstrap/Spinner'

const Films = () => {
	const [page, setPage] = useState(1)
	const { allData, isLoading, isError, error } = useGetAllData<FilmResponse>("films")
	
	return(
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Films</h1>
			<div className='d-flex-column m-2 justify-content-center'>
			
				{isLoading && <Spinner className='d-flex align-content-center justify-content-center' animation="grow" variant="dark"/>}
				
				{isError === true && <Alert variant="warning">{error}</Alert>}
				
				{allData && (
					<>
						<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
							{allData.data.map((Film:FilmType) => {
								return(
									<Card className='Star-Wars-Card m-3' style={{ width: '25%' }} key={Film.id}>
										<Card.Header className='Star-Wars-Text mb-2'>{Film.title}</Card.Header>
										<Card.Body>
											<Card.Text>{Film.opening_crawl}</Card.Text>
										</Card.Body>
										<Card.Link as={Link} to={"/films/" + Film.id}>
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
					</>
				)}
			</div>
		</>
	
	)
}

export default Films