import React from 'react'
import Button from 'react-bootstrap/Button'

interface IPaginationProps {
	page: number
	totalPages: number
	hasPreviousPage: boolean
	hasNextPage: boolean
	onPreviousPage: () => void
	onNextPage: () => void
}

const Pagination: React.FC<IPaginationProps> = ({
	page,
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
			<div className="page">
                Page {page}/{totalPages}
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
