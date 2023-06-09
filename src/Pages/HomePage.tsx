import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<h1>Welcome young Skywalker!</h1>

			<Link to="/Films">
				<div>Films</div>
			</Link>
			<Link to="/People">
				<div>People</div>
			</Link>
			<Link to="/Planets">
				<div>Planets</div>
			</Link>
			<Link to="/Species">
				<div>Species</div>
			</Link>
			<Link to="/Starships">
				<div>Starships</div>
			</Link>
			<Link to="/Vehicles">
				<div>Vehicles</div>
			</Link>

		</>
	)
}

export default HomePage