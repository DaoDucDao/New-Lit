import React from 'react';
import './scss/LIT_Create_Migration.scss';
import { useState } from 'react';
import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
   Box,
   TextField,
} from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import { useEffect } from 'react';

function LIT_Create_Migration_Setup(props, ref) {
   const _ = require('lodash');
   const [active, setActive] = useState(false);

   const [options, setOptions] = useState([]);

   useEffect(() => {
      getOptions();
   }, []);

   const getOptions = () => {
      let _option = _.cloneDeep(options);

      setOptions(() => _option);
   };

   return (
      <Box className='set-up-container'>
         {/* Source Cart Setup */}
         <Accordion defaultExpanded>
            {/* Accordion Title */}
            <AccordionSummary>
               <Typography>Source Cart Setup</Typography>
            </AccordionSummary>

            {/* Accordion Content */}
            <AccordionDetails>
               <div className='source-cart-detail'>
                  {/* type */}
                  <div className='source-cart-type'>
                     <label>Source Cart Type</label>
                     <div className='auto-complete-type'>
                        <Autocomplete
                           options={options}
                           renderInput={(params) => (
                              <TextField {...params} label='' variant='outlined' />
                           )}
                           fullWidth
                           onMouseOver={() => props.afterHover('source-type')}
                        ></Autocomplete>
                     </div>
                  </div>

                  {/* url */}
                  <div className='source-cart-url'>
                     <label>Source Cart Url</label>
                     <TextField
                        variant='outlined'
                        onMouseOver={() => props.afterHover('source-url')}
                     />
                  </div>
               </div>
            </AccordionDetails>
         </Accordion>

         {/* Target Cart Setup */}
         <Accordion defaultExpanded>
            {/* Accordion Title */}
            <AccordionSummary>
               <Typography>Target Cart Setup</Typography>
            </AccordionSummary>

            {/* Accordion Content */}
            <AccordionDetails>
               <div className='target-cart-detail'>
                  {/* type */}
                  <div className='target-cart-type'>
                     <label>Target Cart Type</label>
                     <div className='auto-complete-type'>
                        <Autocomplete
                           options={options}
                           renderInput={(params) => (
                              <TextField {...params} label='' variant='outlined' />
                           )}
                           fullWidth
                           onMouseOver={() => props.afterHover('target-type')}
                        ></Autocomplete>
                     </div>
                  </div>

                  {/* url */}
                  <div className='target-cart-url'>
                     <label>Target Cart Url</label>
                     <TextField
                        variant='outlined'
                        onMouseOver={() => props.afterHover('target-url')}
                     />
                  </div>
               </div>
            </AccordionDetails>
         </Accordion>
         <div className='configure-panel'>
            <div className='configure-migration-button'>Next: Configure your Migration</div>
         </div>
      </Box>
   );
}

export default LIT_Create_Migration_Setup;
