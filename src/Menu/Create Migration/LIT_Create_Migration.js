import { Box, Container, Divider } from '@mui/material';
import React, { useState } from 'react';
import './scss/LIT_Create_Migration.scss';
import LIT_Advertise from '../../common/LIT_Advertise';
import LIT_Time_Line from './LIT_Time_Line';
import LIT_Create_Migration_Setup from './LIT_Create_Migration_Setup';

function LIT_Create_Migration(props, ref) {
   const defaultIntructions = {
      sourceType: {
         title: 'Source Cart Type',
         detail: 'Select your Source Cart Type from the drop-down list',
      },
      sourceURL: {
         title: 'Source Cart URL',
         detail: `Provide your Source Cart URL, Example: 
         \n http://yourdomain.com/store/ 
         \nYou can copy the URL of your store from a browser's address bar`,
      },
      question: {
         title: `What's Connector?`,
         detail: `Connector is a small file helping connect your Source Cart to a Target Cart and enable data transfer. Connector contains a unique 32-digit Security Token and cannot be accessed from anywhere except from your LitExtension account.`,
      },
      upload: {
         title: `Unpack & Upload the Connector`,
         detail: `Locate 'le_connector.zip' file on your computer. Extract (unzip) the file to your store's root folder. Your store's root can be accessed via any FTP-client e.g. FileZilla, WinSCP, Total Commander, etc. Make sure that 'le_connector' folder is there.`,
      },
      connection: {
         title: 'Check the Connection',
         detail: `You should get 'Connector successfully Installed' message if everything works fine. \n
        If the message doesn't appear, ensure the 'le_connector' folder placed correctly (root folder of your store or website)`,
      },
      targetType: {
         title: 'Target Cart Type',
         detail: 'Select your Target Cart Type from the drop-down list',
      },
      targetURL: {
         title: 'Target Cart URL',
         detail: `Provide your Target Cart URL, Example:
        \n http://yourdomain.com/store/
        \n You can copy the URL of your store from a browser's address bar`,
      },
   };

   const [instruction, setInstruction] = useState(defaultIntructions.sourceType);

   const defaultCart = {
      sourceCartType: null,
      sourceCartUrl: null,
      targetCartType: null,
      targetCartUrl: null,
   };

   const [cart, setCart] = useState(defaultCart);

   const afterHover = (type) => {
      switch (type) {
         case 'source-type':
            setInstruction(() => defaultIntructions.sourceType)
            break;
         case 'source-url':
            setInstruction(() => defaultIntructions.sourceURL)
            break;
         case 'target-type':
            setInstruction(() => defaultIntructions.targetType)
            break;
         case 'target-url':
            setInstruction(() => defaultIntructions.targetURL)
            break;
      
         default:
            break;
      }
   }

   return (
      <Container className='create-container'>
         <LIT_Time_Line />
         <div className='create-migration-center'>
            {/* center-left */}
            <div className='create-migration-left'>
               {/* Setup label */}
               <h3  className='setup-header'>Setup</h3>
               
               {/* Setup Accordion */}
               <LIT_Create_Migration_Setup afterHover={afterHover}/>

            </div>

            {/* center-right */}
            <div className='create-migration-right'>
               <div className='create-migration-instruction-panel'>
                  <Box>
                     <label className='instruction-label font-bold'>
                        <img
                           src='https://cm.litextension.com/images/lifesaver.svg'
                           style={{ width: '1.5rem', paddingRight: '.5rem' }}
                        />
                        Instructions
                     </label>
                     <Divider />

                     <label className='instruction-title font-bold'> {instruction?.title}</label>
                     <label className='instruction-detail'>{instruction?.detail}</label>
                  </Box>
               </div>

               <LIT_Advertise />
            </div>
         </div>
      </Container>
   );
}

export default LIT_Create_Migration;
