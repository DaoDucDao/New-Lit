import React, { useState } from 'react';
import './scss/Menu.scss';
import {
   AppBar,
   Container,
   Toolbar,
   ThemeProvider,
   Tabs,
   Tab,
   Menu,
   MenuItem,
} from '@mui/material';
import ColorTheme from '../common/ColorTheme';
import './../common/scss/common.scss';
import { TabPanel, TabContext } from '@mui/lab';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LIT_My_Migration from './My Migrations/LIT_My_Migration';

function LIT_Menu(props, ref) {
   const [index, setIndex] = useState(0);
   const [openService, setOpenService] = useState(false);
   const [openProfile, setOpenProfile] = useState(false);

   const renderMenu = () => {
      return (
         <React.Fragment>
            <Menu
               open={openService}
               onClose={() => setOpenService((current) => !current)}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
               className='menu-service'
            >
               <MenuItem onClick={() => setOpenService((current) => !current)}>
                  Migrate from CSV files
               </MenuItem>
               <MenuItem onClick={() => setOpenService((current) => !current)}>
                  Migrate from Database files
               </MenuItem>
               <MenuItem onClick={() => setOpenService((current) => !current)}>
                  Customize Service
               </MenuItem>
               <MenuItem onClick={() => setOpenService((current) => !current)}>
                  Customize Field Package
               </MenuItem>
            </Menu>

            <Menu
               open={openProfile}
               onClose={() => setOpenProfile((current) => !current)}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
               className='menu-profile'
            >
               <MenuItem onClick={() => setOpenProfile((current) => !current)}>My Profile</MenuItem>
               <MenuItem onClick={() => setOpenProfile((current) => !current)}>
                  Top up balance
               </MenuItem>
               <MenuItem onClick={() => setOpenProfile((current) => !current)}>
                  Order History
               </MenuItem>
               <MenuItem onClick={() => setOpenProfile((current) => !current)}>
                  Download Invoice
               </MenuItem>
               <MenuItem onClick={() => setOpenProfile((current) => !current)}>Logout</MenuItem>
            </Menu>
         </React.Fragment>
      );
   };

   const applyProps = (i) => {
      return {
         id: `simple-tab-${i}`,
         'aria-controls': `simple-tabpanel-${i}`,
      };
   };

   const renderCenter = () => {
      switch (index) {
         case 0:
            return <LIT_My_Migration />;
         case 1:
            return 'Create migration';

         case 2:
            return 'All-in-one Migration';

         default:
            break;
      }
   };

   return (
      <Container>
         <div className='top-bar-container menu-tab-bar'>
            <ThemeProvider theme={ColorTheme}>
               <AppBar position='fixed' color='shadow'>
                  <Toolbar className='toolbar'>
                     <img src='https://cm.litextension.com/images/logo.svg' className='lit-logo' />
                     <div className='right-toolbar'>
                        <Tabs
                           value={index}
                           onChange={(e, newValue) => setIndex(() => newValue)}
                           indicatorColor='none'
                        >
                           <Tab label='My Migrations' {...applyProps(0)} />
                           <Tab label='Create Migration' {...applyProps(1)} />
                           <Tab label='All-in-one Migration' {...applyProps(2)} />
                           <Tab
                              label={
                                 <label
                                    className='panel-label'
                                    onClick={() => setOpenService((current) => !current)}
                                 >
                                    Buy a Service <ArrowDropDownIcon />
                                 </label>
                              }
                           />
                           <Tab
                              label={
                                 <label
                                    className='panel-label'
                                    onClick={() => setOpenProfile((current) => !current)}
                                 >
                                    AccountName <ArrowDropDownIcon />
                                 </label>
                              }
                           />
                        </Tabs>
                        {renderMenu()}
                     </div>
                  </Toolbar>
               </AppBar>
            </ThemeProvider>
         </div>

         <div className='menu-center'>{renderCenter()}</div>
      </Container>
   );
}

export default LIT_Menu;
