import React from 'react'
import Button from 'react-bootstrap/Button'

interface IPaginationProps {
	pageNumb: number
	totalPages: number
	hasPreviousPage: boolean
	hasNextPage: boolean
	onPreviousPage: () => void
	onNextPage: () => void
}

const Pagination: React.FC<IPaginationProps> = ({
	pageNumb,
	totalPages,
	hasPreviousPage,
	hasNextPage,
	onPreviousPage,
	onNextPage,
}) => {
	return (
		<div className="d-flex justify-content-between align-items-center">
            <div className="prev">
                <Button
                    disabled={!hasPreviousPage}
                    onClick={onPreviousPage}
                    variant="outline-secondary">
                        Previous Page
                </Button>
            </div>
            <div className="page p-3">
                Page {pageNumb}/{totalPages}
            </div>
            <div className="next">
                <Button
                    disabled={!hasNextPage}
                    onClick={onNextPage}
                    variant="outline-secondary">
                        Next Page
                </Button>
            </div>
		</div>
	)
}

export default Pagination
