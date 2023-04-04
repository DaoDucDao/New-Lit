import React from 'react';
import './scss/Menu.scss';
import { AppBar, Container, Toolbar, ThemeProvider } from '@mui/material';
import ColorTheme from '../common/ColorTheme';
import './../common/scss/common.scss';

function LIT_Menu(props, ref) {
   console.log(ColorTheme.palette.shadow.main);

   return (
      <Container>
         <div className='top-bar-container'>
            <ThemeProvider theme={ColorTheme}>
               <AppBar position='fixed' color='shadow'>
                  <Toolbar className='toolbar'>
                     <img src='https://cm.litextension.com/images/logo.svg' className='lit-logo' />
                  </Toolbar>
               </AppBar>
            </ThemeProvider>
         </div>
      </Container>
   );
}

export default LIT_Menu;
