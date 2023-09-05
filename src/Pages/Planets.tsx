import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllPlanets from '../hooks/useGetAllPlanets'
import { Alert } from 'react-bootstrap'
import { PlanetType } from '../types'
import { Card } from 'react-bootstrap'

const Planets = () => {
	const { allPlanets, isLoading, isError, error } = useGetAllPlanets()
	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Planets</h1>
			<div className='d-flex-column m-2 justify-content-center'>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allPlanets && (
				<>
			<p className='d-flex align-content-center justify-content-center'>Have a look at all the planets!</p>
			<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
				{allPlanets.map((planet:PlanetType) => {
					return(
						<Card className='m-3' style={{ width: '25%' }}>
							<Card.Header className='mb-2'>{planet.name}</Card.Header>
							<Card.Body>
								<Card.Text>Climate: {planet.climate}</Card.Text>
								<Card.Text>Population: {planet.population}</Card.Text>
								<Card.Text></Card.Text>	
							</Card.Body>
							<Card.Link as={Link} to={"/planet/"+planet.id}>
							<Button className='m-3' disabled={isLoading} variant="outline-secondary">Read More</Button>
							</Card.Link>
						</Card>
					)
				})}
			</div>
			</>
			)
			}
		</div>
		</>
	)
}

export default Planets