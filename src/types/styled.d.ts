import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		PALETTE: {
			primary: Record<string, string>;
			secondary: Record<string, string>;
			tertiary: Record<string, string>;
			fwhite: string;
			fblack: string;
			white: string;
			black: string;
			background: {
				white: string;
				black: Record<string, string>;
			};
			error: string;
			gray: Record<string, string>;
		};
		FONT_SIZE: {
			[key: string]: string;
		};
		FONT_WEIGHT: {
			[key: string]: string;
		};
		FONT_LINE: {
			[key: string]: string;
		};
	}
}
