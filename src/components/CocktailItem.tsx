/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { Link } from "react-router-dom";

const CocktailItem = ({
	idDrink,
	strDrink,
	strAlcoholic,
	strDrinkThumb,
}: CocktailItemProps) => {
	return (
		<div className="overflow-hidden duration-300 rounded shadow-lg hover:shadow-black/20">
			<img
				className="object-cover w-full h-80"
				src={strDrinkThumb}
				alt="cocktail photo"
			/>
			<div className="p-6">
				<strong className="block mb-2 text-3xl font-bold tracking-widest capitalize">
					{strDrink}
				</strong>
				<span className="block mb-2 text-lg font-bold tracking-widest capitalize">
					cocktail glass
				</span>
				<span className="block mb-4 text-sm font-bold capitalize text-neutral-600">
					{strAlcoholic}
				</span>
				<Link
					to={`cocktail/${idDrink}`}
					className="px-2 py-1 tracking-widest text-white capitalize transition duration-300 rounded bg-lime-700 hover:text-lime-700 hover:bg-lime-200">
					details
				</Link>
			</div>
		</div>
	);
};

export default CocktailItem;
