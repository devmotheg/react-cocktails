/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			keyframes: {
				loading: {
					"0%, 50%, 100%": { transform: "translateY(0)" },
					"25%, 75%": { transform: "translateY(100%)" },
				},
			},
			animation: {
				loading: "loading 2s ease-in-out infinite",
			},
		},
	},
};
