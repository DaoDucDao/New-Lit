import React from 'react';
import './scss/LIT_My_Profile.scss';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Tab } from '@mui/material';
import '@fontsource/roboto';

function LIT_My_Profile(props, ref) {
   const { user } = props;

   const [tabIndex, setTabIndex] = useState('1');

   return (
      <div className='my-profile-container'>
         <h1 className='profile-header'>Account</h1>

         <TabContext value={tabIndex}>
            <TabList onChange={(e, newVal) => setTabIndex(() => newVal)}>
               <Tab label={<label className='profile-tab-label'>Profile</label>} value='1'></Tab>
               <Tab label={<label className='profile-tab-label'>My Payment</label>} value='2'></Tab>
               <Tab
                  label={<label className='profile-tab-label'>Order History</label>}
                  value='3'
               ></Tab>
            </TabList>

            <TabPanel value='1'>
               <Box className='my-profile-panel'>
                  <div className='my-profile-detail'>
                     <div className='profile-left'>
                        <h3 className='user-header'>{user.email}</h3>

                        <p>{user.email}</p>
                        <p>{user.phoneNumber}</p>
                        <p>{user.nation}</p>
                        <p>Member since {user.createDate}</p>
                     </div>

                     <div className='profile-right'>
                        <div className='button-panel'>
                           <div className='profile-button' style={{ width: '37%' }}>
                              Edit Profile
                           </div>
                        </div>
                        <div className='button-panel'>
                           <div className='profile-button' style={{ width: '53%' }}>
                              Change Password
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className='subscription-detail'></div>
               </Box>
               <Box className='subscription-detail'>
                  <div className='subscription-panel'>
                     <h3 className='subscription-header'>E-mail Subscriptions</h3>
                     <p className='subscription-text'>
                        By subcribing to our email newsletter, you will be opting to receive updates
                        about new feature releases, discounts and promotional codes, security
                        updates, and more.
                     </p>
                     <p className='subscription-text'>
                        If you're not interested in receiving this content, please uncheck the box
                        below to unsubscribe.
                     </p>
                     <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label='Subscibe To Newsletter'
                     ></FormControlLabel>
                  </div>
               </Box>
            </TabPanel>
            <TabPanel value='2'>My Payment</TabPanel>
            <TabPanel value='3'>Order History</TabPanel>
         </TabContext>
      </div>
   );
}

export default LIT_My_Profile;
