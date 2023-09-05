import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import useGetAllSpecies from '../hooks/useGetAllSpecies'
import { Alert } from 'react-bootstrap'
import { SpeciesType } from '../types'
import { Card } from 'react-bootstrap'

const Species = () => {
	const { allSpecies, isLoading, isError, error } = useGetAllSpecies()
	return (
		<>
			<h1 className='d-flex mb-5 mt-5 align-content-center justify-content-center'>Species</h1>
			<div className='d-flex-column m-2 justify-content-center'>
			
			{isLoading && <p className='d-flex align-content-center justify-content-center'>Loading...</p>}
			
			{isError === true && <Alert variant="warning">{error}</Alert>}
			
			{allSpecies && (
				<>
			<p className='d-flex align-content-center justify-content-center'>Have a look at all the Species!</p>
			<div className='d-flex flex-row flex-wrap align-item-center justify-content-center'>
				{allSpecies.map((species:SpeciesType) => {
					return(
						<Card className='m-3' style={{ width: '25%' }}>
							<Card.Header className='mb-2'>{species.name}</Card.Header>
							<Card.Body>
								<Card.Text>{species.classification}</Card.Text>
								<Card.Text></Card.Text>	
							</Card.Body>
							<Card.Link as={Link} to={"/species/"+species.id}>
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

export default Species