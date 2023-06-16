import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { search } from '../Services/StarWarsAPI'
import { SearchResponse } from '../types'
import { ListGroup } from 'react-bootstrap'


const HomePage = () => {

	return (
		<>
			<h1>Welcome young Skywalker!</h1>

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