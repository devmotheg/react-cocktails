/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const Loading = () => {
	return (
		<div className="grid w-48 h-32 grid-cols-3 gap-5 mx-auto overflow-hidden">
			<span className="block bg-lime-700 animate-loading"></span>
			<span className="block [animation-delay:100ms] bg-lime-700 animate-loading"></span>
			<span className="block [animation-delay:200ms] bg-lime-700 animate-loading"></span>
		</div>
	);
};

export default Loading;
