import { Theme } from 'styled-components'
export const PALETTE = {
	primary: {
		100: '#7AEEBE',
		200: '#588CDF',
	},
	secondary: {
		100: '#FF7BC3',
		200: '#6451E0',
	},
	tertiary: {
		100: '#FFB546',
		200: '#FF6141',
	},
	fontColor: {
		white: '#DEE1E7',
		black: '#3D4551',
	},
	white: '#ffffff',
	black: '#1E1E1E',
	background: {
		white: '#F5F5F5',
		black: {
			100: '#000000',
			200: '#171717',
			300: '#383838',
		},
	},
	error: '#f00',
	gray: {
		100: '#F8F8F8',
		200: '#EDEDED',
		300: '#E6E6E6',
		400: '#DDDDDD',
		500: '#CCCCCC',
		600: '#B0B0B0',
		700: '#919191',
		800: '#666666',
		900: '#555555',
	},
}

const FONT_SIZE = {
	xxsmall: '12px',
	xsmall: '13px',
	small: '14px',
	medium: '16px',
	large: '18px',
	xlarge: '20px',
	xxlarge: '24px',
	max: '30px',
	full: '50px',
}

const FONT_WEIGHT = {
	light: '300',
	regular: '400',
	medium: '500',
	bold: '700',
}

const FONT_LINE = {
	small: '16px',
	medium: '24px',
	large: '36px',
}

const theme: Theme = {
	PALETTE,
	FONT_LINE,
	FONT_SIZE,
	FONT_WEIGHT,
}

export default theme
