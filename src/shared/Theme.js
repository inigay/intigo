import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue700, indigo700, lightBlue500, grey100, darkBlack, white, deepOrange500} from 'material-ui/styles/colors';

const intigoTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: lightBlue500,
        primary2Color: lightBlue700,
        accent1Color: deepOrange500,
        accent2Color: grey100,
        textColor: darkBlack,
        alternateTextColor: white,
    },
    appBar: {
    
  },
});

export default intigoTheme;