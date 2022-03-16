/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import { useState, useEffect } from "react";

const useFetch = (url: string) => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<any>();

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setIsLoading(false);
				setData(data);
			});
	}, [url]);

	return { isLoading, data };
};

export default useFetch;
