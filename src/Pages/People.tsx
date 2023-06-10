import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const People = () => {
	return (
		<>
			<h1>People</h1>

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