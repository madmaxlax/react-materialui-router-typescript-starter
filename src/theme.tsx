import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
// default theme options:
// https://next.material-ui.com/customization/default-theme/
const theme = createMuiTheme({
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
});

export default theme;
