import { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { search } from '../Services/StarWarsAPI'
import { SearchResponse } from '../types'


const HomePage = () => {

	// When searching for a specific thing, sets the value
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
			<h1>Welcome young Skywalker!</h1>

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

			{/* quick links to the films etc. */}
			<h3>Find everything here:</h3>
			<Link className='homeCategory' to="/Films">
				<div>Films</div>
			</Link>
			<Link className='homeCategory' to="/People">
				<div>People</div>
			</Link>
			<Link className='homeCategory' to="/Planets">
				<div>Planets</div>
			</Link>
			<Link className='homeCategory' to="/Species">
				<div>Species</div>
			</Link>
			<Link className='homeCategory' to="/Starships">
				<div>Starships</div>
			</Link>
			<Link className='homeCategory' to="/Vehicles">
				<div>Vehicles</div>
			</Link>

		</>
	)
}

export default HomePage