/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

interface CocktailJSON {
	[index: string]: string;

	idDrink: string;
	strDrink: string;
	strAlcoholic: string;
	strGlass: string;
	strInstructions: string;
	strDrinkThumb: string;
	strIngredient1: string;
	strIngredient2: string;
	strIngredient3: string;
}

interface SearchProps {
	query: string;
	setQuery: (query: string) => void;
}

interface CocktailItemProps extends CocktailJSON { }

interface CocktailsListProps {
	list: CocktailItemProps[];
}
