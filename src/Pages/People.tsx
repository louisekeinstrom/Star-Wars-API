import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { search } from '../services/StarWarsAPI'
import { PeopleType, SearchResponse } from '../types'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import * as StarWarsApi from '../services/StarWarsAPI'
import useGetAllPeople from '../hooks/useGetAllPeople'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const People = () => {
	// When searching for a specific person, sets the value
	const [searchInput, setSearchInput] = useState("")
	// Set result for search
	const [searchResult, setSearchResult] = useState<SearchResponse | null>()
	const {allPeople, isError, error, isLoading} = useGetAllPeople()
	
	
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
						disabled={!searchInput.trim().length}
						>Use the Force</Button>
				</div>
			</Form>
			</div>

			{isLoading && <p className='d-flex align-content-center justify-content-center'>INSERT LOADING ICON HERE</p>}

			{allPeople && (
				<>
				<div>
				<p className='d-flex align-content-center justify-content-center'>People of the jedi-verse</p>
				<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
					{allPeople.map((person:PeopleType) => {
						return(
							<Card className='m-3' style={{ width: '25%' }} key={person.id}>
							<Card.Header className='mb-2'>{person.name}</Card.Header>
							<Card.Body>
								<Card.Text>Home World: {person.homeworld.name}</Card.Text>
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
			</>
			)}
		</>
	)
}

export default People