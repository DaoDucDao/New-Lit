import React from 'react';
import './../../common/scss/common.scss';
import './scss/_LIT_Migration_Detail.scss';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LIT_Time_Line from '../Create Migration/LIT_Time_Line';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

function LIT_Migration_Detail(props, ref) {
   const { detail } = props;
   return (
      <div className='detail-container'>
         <div className='header-panel'>
            <h1 className='font-bold'>Migration Details: ID: {detail.id}</h1>
         </div>

         <div className='information-panel'>
            <div className='migration-from'>
               <a href={detail.fromLink}>
                  <img src={detail.imageFrom} className='image-migration'></img>
               </a>
               <a href={detail.fromLink}>{detail.fromLink}</a>
            </div>

            <ArrowRightIcon
               className='arrow-icon'
               style={{
                  marginLeft: '2rem',
                  marginRight: '2rem',
                  color: '#dedede',
                  height: '2rem',
                  fontSize: '3rem',
               }}
            />

            <div className='migration-to'>
               <a href={detail.toLink}>
                  <img src={detail.imageTo} className='image-migration'></img>
               </a>
               <a href={detail.toLink} style={{ maxWidth: '12rem' }}>
                  {detail.toLink}
               </a>
            </div>
         </div>

         <div className='time-line-detail'>
            <LIT_Time_Line></LIT_Time_Line>
         </div>

         <div className='migration-confirmation'>
            <div className='migration-status'>
               Migration Status: <span className='font-bold'>{detail.name}</span>
            </div>
            <div className='confirmation-note'>
               Do you want to restart your migration again? If yes, please review your Setup info
               and proceed. Additional costs may be applied for this migration.
            </div>

            <p style={{ fontSize: '13px', textAlign: 'center' }}>Available actions</p>

            <div className='continue-panel'>
               <div className='continue-migration-button'>Continue Migration</div>
            </div>
         </div>

         <h2 className='cost-header'>Migration Cost</h2>

         <div className='migration-cost'>
            <Accordion>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Total Entity :</Typography>
                  <Typography>{detail.totalEntity}</Typography>
               </AccordionSummary>
            </Accordion>

            <Accordion>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Additional Options:</Typography>
                  <Typography>{detail.additionalOption}</Typography>
               </AccordionSummary>
            </Accordion>

            <Accordion disabled>
               <AccordionSummary>
                  <Typography>Total:</Typography>
                  <Typography>{detail.total}</Typography>
               </AccordionSummary>
            </Accordion>
         </div>
      </div>
   );
}

export default LIT_Migration_Detail;
