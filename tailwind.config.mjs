/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				'yellow': '0 35px 35px #ffee58',
			  },
			typography: ({ theme }) => ({
				vit: {
				  css: {
					'--tw-prose-body': theme('colors.gray[800]'),
					'--tw-prose-headings': theme('colors.gray[700]'),
				  },
				},
			  }),
		},
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
	  ],
	  daisyui: {
		themes: ["light"], 
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
	  },	
	  future: {
		hoverOnlyWhenSupported: true,
	  },
	  colorMode: {
		disableModernColorFormat: true
	  }
}
