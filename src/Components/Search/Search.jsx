import React, { useState } from 'react';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from '../../assests/search-icon.svg';
const Search = ({ placeholder, data }) => {
  const [val, setVal] = useState(null);
  const onSubmit = e => {
    e.preventDefault();
  };

  const changeHandler = e => {
    console.log(e.target.value);
    setVal(e.target.value);
    const res = data.filter(item => item.title.includes(e.target.value));
    console.log(res);
  };
  return (
    <form action="" className={styles.wrapper} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.search}
        placeholder={placeholder}
        value={val}
        onChange={changeHandler}
        required
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
