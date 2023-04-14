import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: '#1B1B1B',
    primary_light: '#313131',
    secondary: '#14b8a6',
    white: '#FFFFFF',
  },
  fontConfig: {
    Raleway: {
      400: {
        normal: 'Raleway_400Regular',
      },
      500: {
        normal: 'Raleway_500Medium',
      },
      600: {
        normal: 'Raleway_600SemiBold',
      },
      700: {
        normal: 'Raleway_700Bold',
      },
    },
  },
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
    mono: 'Raleway',
  },
});
