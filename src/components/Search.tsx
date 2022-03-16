/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const Search = ({ query, setQuery }: SearchProps) => {
  return (
    <div className="p-6 mx-auto rounded shadow-md w-fit">
      <strong className="block mb-4 text-2xl font-bold capitalize text-lime-700">
        search your favorite cocktail
      </strong>
      <input
        value={query}
        className="w-full p-2 rounded outline-none bg-neutral-100"
        type="text"
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
