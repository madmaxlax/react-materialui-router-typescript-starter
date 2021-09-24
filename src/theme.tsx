import { createTheme, Theme } from '@mui/material';
import red from '@mui/material/colors/red';

// A custom theme for this app
// default theme options:
// https://next.material-ui.com/customization/default-theme/
//Add custom params to theme for regular re-use
export interface CustomTheme extends Theme {
  customValues: {
    primaryFontFamily: string;
    secondaryFontFamily: string;
    customColor: string;
  };
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiButton: {
      //custom variants
      variants: [
        {
          // note: Material UI v5 is still working on this, so it doesn't work as of Feb 2021
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          props: { variant: 'custom' as any },
          style: {
            backgroundColor: '#00acee',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#007cad',
            },
          },
        },
      ],
    },
  },
}) as CustomTheme;

theme.customValues = {
  primaryFontFamily: 'Roboto',
  secondaryFontFamily: 'Arial',
  customColor: 'green',
};

export default theme;
