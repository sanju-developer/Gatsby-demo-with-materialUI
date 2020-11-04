import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#66180d',
      light:'#f4eeeb'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
      paper:'#ffffff'
    },
    text:{
      covidDanger:'red',
      covidNormal:'orange',
      covidSuccess:'green'
    }
  },
});

export default theme;
