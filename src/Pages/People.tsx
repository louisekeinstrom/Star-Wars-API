import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { search } from '../services/StarWarsAPI'
import { PeopleResponse, PeopleType, SearchResponse } from '../types'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import * as StarWarsApi from '../services/StarWarsAPI'
import useGetAllData from '../hooks/useGetAllData'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'


const People = () => {
	// When searching for a specific person, sets the value
	const [searchInput, setSearchInput] = useState("")
	// Set result for search
	const [searchResult, setSearchResult] = useState<SearchResponse | null>()
	const { allData, isLoading, isError, error } = useGetAllData<PeopleResponse>("people")
	const [page, setPage] = useState(0)

	
	
	// Function to create a searcQuery from input-value
	// const searchValue = async (searchQuery:string) => {
	// 	setLoading(true)
	// 	setError(null)
	// 	setSearchResult(null)

		
	// }

	// // runs when submitting
	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault()

	// 	if(!searchInput.trim().length){
	// 		return
	// 	}
	// 	searchValue(searchInput)
	// 	console.log("this is search input", searchInput)
	// }

	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>People</h1>

			{/* input field for searching  */}
			<div className='d-flex justify-content-end align-content-center' style={{width: '100%'}}>
			<Form style={{width: '25%'}}>
				<Form.Group className="m-4 d-flex flex-column" controlId="searchQueryPeople">
					<Form.Control
						onChange={e => setSearchInput(e.target.value)}
						placeholder="Enter your search query"
						type="text"
						value={searchInput}
						/>
				</Form.Group>

				<div className="d-flex justify-content-end">
					<Button
						type="submit"
						variant="outline-secondary"
						disabled={!searchInput.trim().length}
						>Use the Force</Button>
				</div>
			</Form>
			</div>

			{isLoading && <p className='d-flex align-content-center justify-content-center'>INSERT LOADING ICON HERE</p>}

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
		</>
	)
}

export default People