/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Cocktail from "../pages/Cocktail";

const Project = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/cocktail/:id" element={<Cocktail />} />
			</Routes>
		</Router>
	);
};

export default Project;
