import React, { useState } from 'react';
import './scss/LIT_My_Migration.scss';
import './../../common/scss/common.scss';
import { Box, Container, Divider } from '@material-ui/core';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function LIT_My_Migration(props, ref) {
   const defaultMigration = {
      id: null,
      migrationName: null,
      migrationFromName: null,
      migrationToName: null,
      migrationFromStore: null,
      migrationToStore: null,
      imageFrom: null,
      imageTo: null,
      fromLink: null,
      toLink: null,
   };

   const fakeMigrations = [
      {
         id: 855594,
         name: 'New Migration Confirmation',
         migrationFromName: 'migrationFromName1',
         migrationToName: 'migrationToName1',
         migrationFromStore: 'migrationFromStore1',
         migrationToStore: 'migrationToStore1',
         imageFrom: 'https://cm.litextension.com/images/logo/magento.png',
         imageTo: 'https://cm.litextension.com/images/logo/shopify.png',
         fromLink: 'http://45.79.43.178/source_carts/magento194/magento-mirror-1.9.4.5',
         toLink: 'https://laiminhduy0710.myshopify.com',
      },
      {
         id: 312607,
         name: 'Demo Migration Completed',
         migrationFromName: 'migrationFromName2',
         migrationToName: 'migrationToName2',
         migrationFromStore: 'migrationFromStore2',
         migrationToStore: 'migrationToStore2',
         imageFrom: 'https://cm.litextension.com/images/logo/magento.png',
         imageTo: 'https://cm.litextension.com/images/logo/shopify.png',
         fromLink: 'http://45.79.43.178/source_carts/magento194/magento-mirror-1.9.4.5',
         toLink: 'https://laiminhduy0710.myshopify.com',
      },
      {
         id: 110599,
         name: 'name3',
         migrationFromName: 'migrationFromName3',
         migrationToName: 'migrationToName3',
         migrationFromStore: 'migrationFromStore3',
         migrationToStore: 'migrationToStore3',
         imageFrom: 'https://cm.litextension.com/images/logo/magento.png',
         imageTo: 'https://cm.litextension.com/images/logo/shopify.png',
         fromLink: 'http://45.79.43.178/source_carts/magento194/magento-mirror-1.9.4.5',
         toLink: 'https://laiminhduy0710.myshopify.com',
      },
   ];

   const [migrations, setMigrations] = useState([defaultMigration]);

   const defaultIntructions = {
      create: {
         title: 'Create new Migration ',
         detail:
            'Start a new migration. You can run a Free Demo Migration before purchasing a Full package.',
      },
      continue: {
         title: 'Continue Migration',
         detail: 'Continue the unfinished action.',
      },
      detail: {
         title: 'Migration Detail',
         detail:
            'Click on "Migration ID:XXX" for detailed information of your migration. Here, you can find your migration status, available actions, migration history, migration log and your expense.',
      },
   };

   const [instruction, setInstruction] = useState(defaultIntructions.create);

   return (
      <Container className='migration-container'>
         <div className='migration-center'>
            {/* mirgation-left */}
            <div className='migration-left'>
               {/* migration-header */}
               <div className='header-panel'>
                  <h1 className='mygration-header'>My Migrations</h1>
                  <div
                     className='create-migration-button'
                     onMouseOver={() => setInstruction(() => defaultIntructions.create)}
                  >
                     Create New Migration
                  </div>
               </div>
               <Divider />

               {/* Migration-list */}
               <div className='migration-list'>
                  {fakeMigrations.map((migration) => (
                     <Box>
                        {/* Migration-label */}
                        <label
                           className='migration-detail-header'
                           style={{ fontSize: '18px', fontWeight: '400' }}
                           onMouseOver={() => setInstruction(() => defaultIntructions.detail)}
                        >
                           <span className='font-bold' style={{ fontSize: '16px' }}>
                              Migration ID: {migration.id}
                           </span>{' '}
                           - {migration.name}
                        </label>

                        {/* Migration-detail */}
                        <div className='migration-detail-panel'>
                           <div className='migration-from'>
                              <a href={migration.fromLink}>
                                 <img src={migration.imageFrom} className='image-migration'></img>
                              </a>
                              <a href={migration.fromLink}>{migration.fromLink}</a>
                           </div>

                           <ArrowRightIcon className='arrow-icon' />

                           <div className='migration-to'>
                              <a href={migration.toLink}>
                                 <img src={migration.imageTo} className='image-migration'></img>
                              </a>
                              <a href={migration.toLink} style={{ maxWidth: '12rem' }}>
                                 {migration.toLink}
                              </a>
                           </div>

                           {/* Button Continue Migration */}
                           <div
                              className='continue-migration-button'
                              onMouseOver={() => setInstruction(() => defaultIntructions.continue)}
                           >
                              Continue Migration
                           </div>
                        </div>
                        <Divider />
                     </Box>
                  ))}
               </div>
            </div>

            {/* migration-right */}
            <div className='migration-right'>
               {/* migratoin-instruction */}
               <div className='migration-instruction-panel'>
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

               {/* migration-advertise */}
               <div className='migration-advertise-panel'>
                  <a href='https://shopify.pxf.io/jWxqdZ' target='_blank'>
                     <img
                        src='https://cm.litextension.com/images/cm-square-banner.png'
                        style={{ width: '100%', marginTop: '2.5vh' }}
                     />
                  </a>
               </div>
            </div>
         </div>
      </Container>
   );
}

export default LIT_My_Migration;
