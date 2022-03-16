/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

import CocktailItem from "./CocktailItem";

const CocktailsList = ({ list }: CocktailsListProps) => {
	return (
		<div>
			<strong className="block mb-10 text-4xl font-bold text-center capitalize">
				cocktails
			</strong>
			<ul className="grid gap-12 justify-center grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
				{list.map(c => (
					<CocktailItem key={c.idDrink} {...c} />
				))}
			</ul>
		</div>
	);
};

export default CocktailsList;
