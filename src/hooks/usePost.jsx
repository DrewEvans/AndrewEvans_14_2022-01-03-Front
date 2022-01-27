import { useState, useCallback } from "react";
import axios from "axios";

const usePost = ({ url, headers, payload }) => {
	const [res, setRes] = useState({
		data: null,
		error: null,
		isLoading: false,
	});
	// You POST method here
	const callAPI = useCallback(() => {
		setRes((prevState) => ({ ...prevState, isLoading: true }));
		axios
			.post(url, headers, payload)
			.then((res) => {
				setRes({ data: res.data, isLoading: false, error: null });
			})
			.catch((error) => {
				setRes({ data: null, isLoading: false, error });
			});
	}, [url, headers, payload]);
	return [res, callAPI];
};

export default usePost;
