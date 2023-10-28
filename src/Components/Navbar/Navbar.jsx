import React from 'react';
import Button from '../Button/Button';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
const Navbar = ({ data }) => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search placeholder={'Seach a album of your choice'} data={data} />
      <Button children={'Give Feedback'} />
    </div>
  );
};

export default Navbar;
