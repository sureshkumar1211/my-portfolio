module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "#002731",
				"primary-color-200": "#DFE4E5",
				"primary-color-300": "#9FAEB2",
				"primary-color-400": "#809398",
				"primary-color-500": "#60787E",
				"primary-color-600": "#405D65",
				"primary-color-700": "#20424B",
				"secondary-color": "#310A00",
				// "primary-color": "#013542",
				// "primary-color-200": "#DFE6E7",
				// "primary-color-300": "#C0CCD0",
				// "primary-color-400": "#A0B3B8",
				// "primary-color-500": "#809AA1",
				// "primary-color-600": "#608189",
				// "primary-color-700": "#416871",
				"gray-dark": "#343a40",
			},
		},
		screens: {
			md: "640px",
		},
	},
	plugins: [],
};
