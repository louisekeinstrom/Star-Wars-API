import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { search } from '../services/StarWarsAPI'
import { SearchResponse } from '../types'
import { ListGroup } from 'react-bootstrap'


const HomePage = () => {

	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Welcome young Skywalker!</h1>

			{/* quick links to the films etc. */}
			<div className='d-flex-column justify-content-end align-content-end' style={{width: '100%'}}>
				<h4 className='m-2'>Find everything here:</h4>
				<div className='m-2'>
					<Link className='d-flex-column' to="/Films">
						<Button variant='outline-secondary'>Films</Button>
					</Link>
				</div>
				<div className='m-2'>
					<Link className='d-flex-column' to="/People">
						<Button variant='outline-secondary'>People</Button>
					</Link>
				</div>
				<div className='m-2'>
						<Link className='d-flex-column' to="/Planets">
							<Button variant='outline-secondary'>Planets</Button>
						</Link>
				</div>
				<div className='m-2'>
					<Link className='d-flex-column' to="/Species">
						<Button variant='outline-secondary'>Species</Button>
					</Link>
				</div>
				<div className='m-2'>
					<Link className='d-flex-column' to="/Starships">
						<Button variant='outline-secondary'>Starships</Button>
					</Link>
				</div>
				<div className='m-2'>
					<Link className='d-flex-column' to="/Vehicles">
						<Button variant='outline-secondary'>Vehicles</Button>
					</Link>
				</div>
			</div>

		</>
	)
}

export default HomePage