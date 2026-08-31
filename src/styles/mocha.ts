import { createCatppuccinPlugin } from '@catppuccin/daisyui';
export default createCatppuccinPlugin(
	'mocha',
	{
		primary: 'blue',
		secondary: 'mauve',
		accent: 'peach',
		neutral: 'surface0'
	},
	{
		prefersdark: true
	}
);
