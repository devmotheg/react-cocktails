/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="mb-16">
      <nav className="flex items-center justify-center gap-4 shadow-lg">
        <Link
          to="/"
          className="inline-block p-4 text-2xl capitalize transition opacity-80 hover:opacity-100">
          home
        </Link>
        <Link
          to="/about"
          className="inline-block p-4 text-2xl capitalize transition opacity-80 hover:opacity-100">
          about
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
