import React from 'react';
import style from './Header.module.scss'
import { BsFacebook } from 'react-icons/bs';
import { FaGithub, FaInstagramSquare } from 'react-icons/fa';

const Headersocials = () => {
   return (
      <div className={style.header__socials}>
         <a href="https://www.facebook.com/roman.strynzha" target='_blank'><BsFacebook /></a>
         <a href="https://github.com/pamaxa-s3" target='_blank'><FaGithub /></a>
         <a href="https://www.instagram.com/pamaxa__s3/" target='_blank'><FaInstagramSquare /></a>
      </div>
   );
}

export default Headersocials;
