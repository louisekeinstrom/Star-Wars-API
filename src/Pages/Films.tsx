import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useGetAllData from "../hooks/useGetAllData";
import { FilmResponse, FilmType } from "../types";
import { Card, Alert } from "react-bootstrap";
import Pagination from "../Components/Pagination";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const Films = () => {
	const [page, setPage] = useState(1);
	const { allData, isLoading, isError, error } = useGetAllData<FilmResponse>(
		`/films?page=${page}`
	);
	return (
		<>
			<h1 className="d-flex mb-5 mt-5 align-content-center justify-content-center">
				Films
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
							{allData.data.map((Film: FilmType) => {
								return (
									<Card
										className="d-flex flex-wrap Star-Wars-Card m-3"
										style={{
											width: "25%",
											minWidth: "250px",
										}}
										key={Film.id}
									>
										<Card.Header className="Star-Wars-Text mb-2">
											{Film.title}
										</Card.Header>
										<Card.Body>
											<Card.Text>
												Release date:{" "}
												{Film.release_date}
											</Card.Text>
											<Card.Text>
												Directed by: {Film.director}
											</Card.Text>
										</Card.Body>
										<Card.Link
											as={Link}
											to={"/films/" + Film.id}
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
								pageNumb={allData?.current_page}
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

export default Films;
