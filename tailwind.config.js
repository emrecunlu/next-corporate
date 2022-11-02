/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1100px',
        },
      }
		},
	},
	plugins: [
    require('@tailwindcss/typography')
  ],
}
