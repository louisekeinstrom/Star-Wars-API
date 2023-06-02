import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<h1>Welcome young Skywalker!</h1>

			<Link to="/search">
				<Button variant="primary">Looking for something?</Button>
			</Link>
		</>
	)
}

export default HomePage