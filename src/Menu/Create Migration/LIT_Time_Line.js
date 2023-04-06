import React from 'react';
import { Box } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import './scss/LIT_Create_Migration.scss'

function LIT_Time_Line(props, ref) {
   const [index, setIndex] = useState(0);

   const defaultSteps = ['Setup', 'Demo Migration', 'Full Migration', 'Completed'];

   return (
      <Box className='migration-step-container'>
         <Stepper activeStep={index} alternativeLabel>
            {defaultSteps.map((step) => (
               <Step key={step}>
                  <StepLabel>{step}</StepLabel>
               </Step>
            ))}
         </Stepper>
      </Box>
   );
}

export default LIT_Time_Line;
