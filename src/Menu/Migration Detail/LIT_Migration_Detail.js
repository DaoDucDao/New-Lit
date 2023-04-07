import React, { useState } from 'react';
import './../../common/scss/common.scss';
import './scss/_LIT_Migration_Detail.scss';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LIT_Time_Line from '../Create Migration/LIT_Time_Line';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
   Table,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
} from '@mui/material';

function LIT_Migration_Detail(props, ref) {
   const { detail } = props;

   const draftTotal = [
      { name: 'Categories', count: 0 },
      { name: 'Products', count: 5 },
      { name: 'Customers', count: 0 },
      { name: 'Orders', count: 0 },
      { name: 'Reviews', count: 0 },
      { name: 'Pages', count: 0 },
      { name: 'Coupons', count: 0 },
   ];

   const draftOptions = [
      { name: 'Migrate recent data (adds new entities only)', price: 0 },
      { name: 'Clear current data on Target Store before Migration	', price: 0 },
      { name: 'Transfer images from Categories, Product descriptions to Target Store	)', price: 39 },
      { name: 'Preserve Order IDs on Target Store	', price: 0 },
      { name: 'Strip HTML from category, product names	', price: 0 },
      { name: 'Create the 301 redirects on your target store after migration	', price: 19 },
      { name: 'Migrate Source Store categories into Shopify Smart Collections', price: 0 },
   ];

   const [showHistory, setShowHistory] = useState(false);

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

               <AccordionDetails>
                  <Table>
                     <TableHead>
                        <TableRow>
                           <TableCell align='center'>Entity</TableCell>
                           <TableCell align='center'>Count</TableCell>
                        </TableRow>
                     </TableHead>

                     <TableBody>
                        {draftTotal.map((total) => (
                           <TableRow>
                              <TableCell align='center' component='th'>
                                 {total.name}
                              </TableCell>
                              <TableCell align='center' component='th'>
                                 {total.count}
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </AccordionDetails>
            </Accordion>

            <Accordion>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Additional Options:</Typography>
                  <Typography>{detail.additionalOption}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Table>
                     <TableHead>
                        <TableRow>
                           <TableCell align='center'>Options</TableCell>
                           <TableCell align='center'>Price</TableCell>
                        </TableRow>
                     </TableHead>

                     <TableBody>
                        {draftOptions.map((option) => (
                           <TableRow>
                              <TableCell align='center' component='th'>
                                 {option.name}
                              </TableCell>
                              <TableCell align='center' component='th'>
                                 {option.price}
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </AccordionDetails>
            </Accordion>

            <Accordion disabled>
               <AccordionSummary>
                  <Typography>Total:</Typography>
                  <Typography>{detail.total}</Typography>
               </AccordionSummary>
            </Accordion>
         </div>

         <div className='migration-history-panel'>
            <div
               className='migration-history-button'
               onClick={() => setShowHistory((current) => !current)}
            >
               Migration History
            </div>
         </div>

         {showHistory && (
            <div className='migration-history'>
               <h2 style={{ fontWeight: '500', fontFamily: 'Roboto' }}>Migration History</h2>
            </div>
         )}

         <div className='migration-log'>
            <h2 style={{ fontWeight: '500', fontFamily: 'Roboto' }}>Migration Log</h2>
            <div className='migration-log-detail'></div>
         </div>
      </div>
   );
}

export default LIT_Migration_Detail;
