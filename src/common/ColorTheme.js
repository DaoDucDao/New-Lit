import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const ColorTheme = createTheme({
   palette: {
      shadow: {
         main: '#2f2f2f',
      },
      light_orange: {
         main: '#f26f27',
      },
      facebook_color:{
        main: '#3b5897'
      },
      google_color:{
        main: '#de4e3b'
      }
   },
});

export default ColorTheme;
