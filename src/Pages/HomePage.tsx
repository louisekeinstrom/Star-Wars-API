import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const HomePage = () => {

	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Welcome You Are...</h1>

			<div className='home-page-menu' style={{width: '100%'}}>
				<div className='m-2'>
					<Link className='d-flex-column' to="/Films">
						<Button className='more-btn p-3' variant='outline-secondary'>FILMS</Button>
					</Link>
				</div>
				<div className='m-2'>
					<Link className='d-flex-column' to="/People">
						<Button className='more-btn p-3' variant='outline-secondary'>PEOPLE</Button>
					</Link>
				</div>
				<div className='m-2'>
						<Link className='d-flex-column' to="/Planets">
							<Button className='more-btn p-3' variant='outline-secondary'>PLANETS</Button>
						</Link>
				</div>
				<div className='m-2'>
					<Link className='d-flex-column' to="/Species">
						<Button className='more-btn p-3' variant='outline-secondary'>SPECIES</Button>
					</Link>
				</div>
				<div className='m-2'>
					<Link className='d-flex-column' to="/Starships">
						<Button className='more-btn p-3' variant='outline-secondary'>STARSHIPS</Button>
					</Link>
				</div>
				<div className='m-2'>
					<Link className='d-flex-column' to="/Vehicles">
						<Button className='more-btn p-3' variant='outline-secondary'>VEHICLES</Button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default HomePage