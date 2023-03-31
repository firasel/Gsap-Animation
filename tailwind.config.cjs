/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Aladin', ...fontFamily.sans],
			},
			colors: {
				primary: '#3A082B',
				secondary: '#FCF7C2'
			},
			backgroundImage: {
				'gradient-1':
					'radial-gradient(82.37% 146.43% at 50.96% 74.09%, #6A0C3E 23%, #520A34 58%, #3A082B 100%)'
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "3rem",
					xl: "4rem",
					"2xl": "4rem",
				},
			},
		}
	},
	plugins: []
};
