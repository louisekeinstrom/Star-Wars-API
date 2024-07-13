import { useState } from "react";
import Button from "react-bootstrap/Button";
import { PeopleResponse, PeopleType } from "../types";
import useGetAllData from "../hooks/useGetAllData";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const People = () => {
	const [page, setPage] = useState(1);
	const { allData, isError, isLoading, error } =
		useGetAllData<PeopleResponse>(`/people?page=${page}`);

	return (
		<>
			<h1 className="d-flex mb-5 mt-5 align-content-center justify-content-center">
				People
			</h1>
			<div className="d-flex-column m-2 justify-content-center">
				{isLoading && (
					<Spinner
						className="spinner d-flex align-content-center justify-content-center"
						animation="grow"
						variant="alert"
					/>
				)}

				{isError === true && <Alert variant="warning">{error}</Alert>}

				{allData && (
					<>
						<div className="d-flex flex-row flex-wrap align-item-center justify-content-center">
							{allData.data.map((person: PeopleType) => {
								return (
									<Card
										className="d-flex flex-wrap Star-Wars-Card m-3"
										style={{
											width: "25%",
											minWidth: "250px",
										}}
										key={person.id}
									>
										<Card.Header className="Star-Wars-Text mb-2">
											{person.name}
										</Card.Header>
										<Card.Body>
											<Card.Text>
												Homeworld:{" "}
												{person.homeworld.name}
											</Card.Text>
											<Card.Text>
												Birth year: {person.birth_year}
											</Card.Text>
											<Card.Text></Card.Text>
										</Card.Body>
										<Card.Link
											as={Link}
											to={"/people/" + person.id}
										>
											<Button
												className="read-more-btn m-3"
												disabled={isLoading}
												variant="outline-secondary"
											>
												Read More
											</Button>
										</Card.Link>
									</Card>
								);
							})}
						</div>
						<div className="p-3 m-5 d-flex flex-row justify-content-center align-content-center">
							<Pagination
								pageNumb={allData.current_page}
								totalPages={allData.last_page}
								hasPreviousPage={page > 1}
								hasNextPage={page < allData.last_page}
								onPreviousPage={() => {
									setPage((preValue) => preValue - 1);
								}}
								onNextPage={() => {
									setPage((preValue) => preValue + 1);
								}}
							/>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default People;
