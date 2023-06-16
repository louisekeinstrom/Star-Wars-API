import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { search } from '../Services/StarWarsAPI'
import { SearchResponse } from '../types'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import * as StarWarsApi from '../Services/StarWarsAPI'


const People = () => {
	// function to show all people on the people page
	const renderPeople = async () => {
		const allPeople = await StarWarsApi.getAllPeople()
		console.log('these are all the people', allPeople)
		allPeople.data.map(person => {
				<ListGroup.Item
					action
					key={person.id}
				>
					<h2>${person.name}</h2>
					<p>${person.created}</p>
					<p>${person.edited}</p>
				</ListGroup.Item>
		})
	}

	// For setting a resource
	const [resource, setResource] = useState('posts')
	const [data, setData] = useState([])
	// When searching for a specific person, sets the value
	const [searchInput, setSearchInput] = useState("")
	// Loading state
	const [loading, setLoading] = useState(false)
	// Error handling
	const [error, setError] = useState<string|null>(null)
	// Set result for search
	const [searchResult, setSearchResult] = useState<SearchResponse | null>()


	// Function to create a searcQuery from input-value
	const searchValue = async (searchQuery:string) => {
		setLoading(true)
		setError(null)
		setSearchResult(null)

		try{
			console.log('hej')
			// creates GET-request on search query with pages = 0 as default 
			const dataQuery = await search(searchQuery)
			console.log("this is search query", dataQuery)

		}catch (err: any){
			setError(err.message)
		}

		// Makes sure loading disappears after function is done
		setLoading(false)

	}

	// runs when submitting
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if(!searchInput.trim().length){
			return
		}
		searchValue(searchInput)
		console.log("this is search input",searchInput)
	}

	const showAll = () => {
		const peopleData = StarWarsApi.getAllPeople()
		console.log(peopleData) 
	}

	return (
		<>
			<h1>People</h1>

			{/* input field for searching  */}
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-4" controlId="searchQueryPeople">
					<Form.Label>Search Here</Form.Label>
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

			{loading && <p>INSERT LOADING ICON HERE</p>}
			{searchResult == null && 
			// renderPeople()
				(
			<div>
					{/* <ListGroup>
						{}
					</ListGroup> */}
					hejsan
				</div>
			)
			}

		{true && (
				<div id='results'>
					<p>Showing hits for QUERY</p>

					<ListGroup className='mb-3'>
					{[{}, {},{}].map(hit => (
							<ListGroup.Item
								action
								href={''}
								key={''}
								>
									<h2>TITLE</h2>
									<p className='text-muted small'>Created at CREATED</p>
								</ListGroup.Item>
						))}
						{/* {searchResult.hits.map(hit => (
							<ListGroup.Item
								action
								href={hit.url}
								key={''}
								>
									<h2>{hit.title}</h2>
									<p className='text-muted small'>Created at {hit.created_at}</p>
								</ListGroup.Item>
						))} */}
					</ListGroup>

					<div className='d-flex justify-content-between align-itmes-center mb-3'>
						<div className="prev"><Button variant='primary'>Previous Page</Button></div>
					</div>
					<div className="page">PAGE</div>
					<div className='mb-3'>
						<div className="next"><Button variant='primary'>Next Page</Button></div>
					</div>
				</div>
			)}

			{/* {searchResult && (
				<div id='results'>
					<p>Showing {searchResult.nbHits} for {searchInput}</p>

					<ListGroup className='mb-3'>
					{[{}, {},{}].map(hit => (
							<ListGroup.Item
								action
								href={''}
								key={''}
								>
									<h2>TITLE</h2>
									<p className='text-muted small'>Created at CREATED</p>
								</ListGroup.Item>
						))}
						{/* {searchResult.hits.map(hit => (
							<ListGroup.Item
								action
								href={hit.url}
								key={''}
								>
									<h2>{hit.title}</h2>
									<p className='text-muted small'>Created at {hit.created_at}</p>
								</ListGroup.Item>
						))}
					</ListGroup>

					<div></div>
				</div>
			)} */}

		</>
	)
}

export default People