import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<h1>Welcome young Skywalker!</h1>

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