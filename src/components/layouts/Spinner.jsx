import React from 'react';
import loader from '../assests/loader.gif';
const Spinner = () => {
  return <div className='mt-20 w-100'>
      <img className='mx-auto text-center' src={loader} width={180} alt="" srcset="" />
  </div>;
};

export default Spinner;
