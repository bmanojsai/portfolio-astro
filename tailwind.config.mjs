/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				title: ["UnifrakturMaguntia", ...defaultTheme.fontFamily.serif],
				"heading-1": [
					"Noto Serif Display Variable",
					...defaultTheme.fontFamily.serif,
				],
				"heading-2": ["DM Serif Display", ...defaultTheme.fontFamily.serif],
				"sub-heading": ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
				"sub-heading-captions": ["Lato", ...defaultTheme.fontFamily.serif],
				body: ["Tinos", ...defaultTheme.fontFamily.serif],
				other: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
