import React, { useState } from 'react';
import './scss/Login.scss';
import {
   AppBar,
   Box,
   Container,
   FormControl,
   FormControlLabel,
   FormLabel,
   TextField,
   ThemeProvider,
   Toolbar,
   Checkbox,
   Button,
   Stack,
   Divider,
} from '@mui/material';
import ColorTheme from '../common/ColorTheme';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { LIT_ValidLength } from '../utils/validate';
import './../common/scss/common.scss'

function Login(props, ref) {
   const {afterSubmit} = props

   const defaultUser = {
      email: null,
      password: null,
   };

   const [user, setUser] = useState(defaultUser);

   const [errors, setErrors] = useState({ email: null, password: null });

   const _ = require('lodash');

   const bottomAnchor = [
      {
         name: 'Terms and Conditions, ',
         link: 'https://litextension.com/terms-conditions.html',
      },
      {
         name: 'Private Policy, ',
         link: 'https://litextension.com/privacy-policy.html?_ga=2.66811500.371720734.1680490437-1529531665.1680490437',
      },
      {
         name: 'GDPR Compliance',
         link: 'https://litextension.com/gdpr-compliance.html',
      },
   ];

   const submit = () => {
      let isValid = validate([]);
      if (isValid.length === 0) afterSubmit(user)
      // try {
      // } catch (error) {}
   };

   const applyChange = (prop, val) => {
      let _user = _.cloneDeep(user);
      if (prop)
         switch (prop) {
            case 'email':
               _user[prop] = val;
               break;

            case 'password':
               _user[prop] = val;
               break;

            default:
               break;
         }

      validate([prop], _user);
      setUser(() => _user);
   };

   const validate = (props, _user) => {
      let _error = _.cloneDeep(errors);

      _user = _user || _.cloneDeep(user);

      if (props.length === 0)
         for (const property in errors) {
            props.push(property);
         }
      let valid = null;

      props.forEach((prop) => {
         switch (prop) {
            case 'email':
               valid = LIT_ValidLength(_user[prop], 0);
               if (valid === 'empty') _error[prop] = 'Email is empty';
               else _error[prop] = null;
               break;
            case 'password':
               valid = LIT_ValidLength(_user[prop], 0);
               if (valid === 'empty') _error[prop] = 'Password is empty';
               else _error[prop] = null;
               break;

            default:
               break;
         }
      });

      setErrors(() => _error);

      let validArr = [];
      for (const prop in _error) {
         if (_error[prop] !== null) validArr.push(_error[prop]);
      }

      return validArr;
   };

   return (
      <Container>
         {/* topbar */}
         <div className='top-bar-container'>
            <ThemeProvider theme={ColorTheme}>
               <AppBar position='fixed' color='shadow'>
                  <Toolbar className='toolbar'>
                     <img src='https://cm.litextension.com/images/logo.svg' className='lit-logo' />
                  </Toolbar>
               </AppBar>
            </ThemeProvider>
         </div>

         {/* content */}
         <div className='login-content'>
            {/* title */}
            <div className='paper'>
               <h3 className='login-title'>Log In</h3>
               <h3 className='new-text'>
                  New to LitExtension? <a href='https://cm.litextension.com/register'> Sign Up</a>
               </h3>
            </div>

            {/* center */}
            <div className='login-center'>
               {/* center left */}
               <div className='center-left'>
                  <p className='text-description'>
                     You're about to experience a stress-free, quick & accurate migration. Just log
                     in!
                  </p>

                  <div className='panel'>
                     <div className='panel-text'>
                        <label className='email-label'>Email</label>
                        <label
                           className='pass-label'
                           style={errors.email?.length > 0 ? { marginTop: '2rem' } : null}
                        >
                           Password
                        </label>
                     </div>

                     <div className='panel-field'>
                        <TextField
                           variant='outlined'
                           className='Textfield'
                           type='email'
                           helperText={errors.email}
                           error={errors.email?.length > 0}
                           onChange={(e) => applyChange('email', e.target.value)}
                        />
                        <TextField
                           variant='outlined'
                           className='Textfield'
                           type='password'
                           helperText={errors.password}
                           error={errors.password?.length > 0}
                           onChange={(e) => applyChange('password', e.target.value)}
                        />
                     </div>
                  </div>

                  <div className='bottom-panel'>
                     <FormControlLabel
                        control={<Checkbox />}
                        label={<label style={{ fontSize: '13px' }}>Remember me</label>}
                     />
                     <a className='remember-text' href='https://cm.litextension.com/password/reset'>
                        Forgot Password?
                     </a>
                  </div>

                  <div className='button-panel'>
                     <ThemeProvider theme={ColorTheme}>
                        <Button
                           variant='contained'
                           size='large'
                           color='light_orange'
                           onClick={() => submit()}
                        >
                           Login
                        </Button>
                     </ThemeProvider>
                  </div>
               </div>
               <Divider orientation='vertical' flexItem />
               {/* center right */}
               <div className='center-right'>
                  <Stack spacing={2}>
                     <ThemeProvider theme={ColorTheme}>
                        <Button
                           variant='contained'
                           color='facebook_color'
                           startIcon={<FacebookOutlinedIcon />}
                        >
                           sign in with facebook
                        </Button>
                        <Button
                           variant='contained'
                           color='google_color'
                           startIcon={<GoogleIcon />}
                        >
                           sign in with google
                        </Button>
                     </ThemeProvider>
                  </Stack>
               </div>
            </div>

            <div className='login-bottom'>
               <label>
                  * By signing in, you agree to our{' '}
                  {bottomAnchor.map((anchor) => (
                     <a href={anchor.link}>{anchor.name}</a>
                  ))}{' '}
                  and to receive LitExtension emails & updates of the migration process.
               </label>
            </div>
         </div>
      </Container>
   );
}

export default Login;
