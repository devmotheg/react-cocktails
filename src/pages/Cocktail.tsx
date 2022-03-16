/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import useFetch from "../hooks/use-fetch";

const DATA_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const Cocktail = () => {
	const { id } = useParams();
	const { isLoading, data } = useFetch(DATA_URL + id);

	if (isLoading) return <Loading />;

	if (!data || !data.drinks)
		return (
			<h1 className="block w-5/6 mx-auto text-5xl font-bold text-center">
				No cocktail matched your search ID
			</h1>
		);
	const drink = data.drinks[0];

	return (
		<div>
			<Link
				to="/"
				className="block px-2 py-1 mx-auto mb-10 text-xl tracking-widest text-white capitalize transition duration-300 rounded w-fit bg-lime-700 hover:text-lime-700 hover:bg-lime-200">
				back home
			</Link>
			<div className="container grid items-center w-5/6 gap-10 mx-auto lg:grid-cols-2">
				<img
					className="w-2/3 rounded shadow-lg justify-self-center lg:justify-self-end"
					src={drink.strDrinkThumb}
					alt="cocktail photo"
				/>
				<ul className="max-w-full mx-auto space-y-6 w-fit lg:mx-0">
					{[
						"strDrink",
						"strCategory",
						"strAlcoholic",
						"strInstructions",
						"strGlass",
					].map(f => (
						<li key={f} className="font-bold break-all">
							<span className="px-2 py-1 mr-2 capitalize rounded bg-lime-200 text-lime-700">
								{f.slice(3)}:
							</span>
							{drink[f]}
						</li>
					))}
					<li className="font-bold break-all">
						<span className="px-2 py-1 mr-2 capitalize rounded bg-lime-200 text-lime-700">
							ingeredients:
						</span>
						{["strIngredient1", "strIngredient2", "strIngredient3"]
							.map(f => drink[f])
							.filter(v => !!v)
							.join(", ")}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Cocktail;
