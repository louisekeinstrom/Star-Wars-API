import * as StarWarsAPI from "../Services/StarWarsAPI";
import { useState, useEffect } from "react";

const useGetAllData = <T>(endpoint: string) => {
	const [allData, setAllData] = useState<T | null>(null);
	const [page, setPage] = useState(1);
	const [error, setError] = useState<string | null>(null);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const getAllTheData = async (endpoint: string) => {
		setError(null);
		setIsError(false);
		setIsLoading(true);
		setAllData(null);

		try {
			const res = await StarWarsAPI.getAllData<T>(endpoint);
			setAllData(res);
		} catch (err: any) {
			setError(err.message);
			setIsError(true);
		}

		setIsLoading(false);
	};

	const changePageFn = (value: number) => {
		setPage(page + value);
	};

	useEffect(() => {
		getAllTheData(endpoint);
	}, [endpoint]);

	return {
		allData,
		error,
		isError,
		isLoading,
		page,
		changePageFn,
	};
};

export default useGetAllData;
