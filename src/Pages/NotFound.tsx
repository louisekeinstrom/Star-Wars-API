import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Sorry, that page could not be found 😢!</h1>

			<Link to="/">
				<Button variant="primary">Find your way home</Button>
			</Link>
		</>
	)
}

export default NotFound