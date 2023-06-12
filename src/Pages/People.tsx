import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { search } from '../Services/StarWarsAPI'
import { SearchResponse } from '../types'
import { ListGroup } from 'react-bootstrap'

const People = () => {
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
				const data = await search(searchQuery)
				setSearchResult(data)
	
				
			}catch (err: any){
				setError(err.message)
			}
	
			// Makes sure loading disappears after function is done
			setLoading(false)
	
		}
	
		// runs when submitting
		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault()
	
			searchValue(searchInput)
		}

	return (
		<>
			<h1>People</h1>

			{/* input field for searching  */}
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-4" controlId="searchQuery">
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
					>Use the Force</Button>
				</div>
			</Form>

			{loading && <p>INSERT LOADING ICON HERE</p>}

			{searchResult && (
				<div id='results'>
					<p>Showing {searchResult.nbHits} for {searchInput}</p>

					<ListGroup className='mb-3'>

						{searchResult.hits.map(hit => (
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
				</div>
			)}

		{/* Rendered names */}
			<div>
				<h2>CHARACTER NAME</h2> {/**Insert character name */}
				<p>Created: CREATED</p>{/**Insert created date */}
				<p>Edited: EDITED</p>{/**Insert edited date*/}

			</div>

		</>
	)
}

export default People