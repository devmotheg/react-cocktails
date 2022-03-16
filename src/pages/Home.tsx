/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";

import Search from "../components/Search";
import CocktailsList from "../components/CocktailsList";
import Loading from "../components/Loading";
import useFetch from "../hooks/use-fetch";

const DATA_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = () => {
	const [query, setQuery] = useState("");
	const { isLoading, data } = useFetch(DATA_URL + query);

	return (
		<main className="container grid w-5/6 gap-16 mx-auto">
			<Search query={query} setQuery={setQuery} />
			{isLoading ? (
				<Loading />
			) : !data || !data.drinks ? (
				<h1 className="block w-5/6 mx-auto text-5xl font-bold text-center">
					No cocktails matched your search criteria
				</h1>
			) : (
				<CocktailsList list={data.drinks} />
			)}
		</main>
	);
};

export default Home;
