import React from 'react';

const LIT_ValidLength = (props, minLength) => {
   if(!props || props && props.length <= minLength) return 'empty'
   else return null
};

export { LIT_ValidLength };
