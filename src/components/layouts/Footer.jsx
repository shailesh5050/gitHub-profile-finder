import React from 'react';
const year=new Date().getFullYear();
const Footer = () => {
  return <footer className='p-10 bg-gray-700 footer text-primary-content footer-center'>
      <p>Copyright &copy; {year}</p>

  </footer>;
};

export default Footer;
