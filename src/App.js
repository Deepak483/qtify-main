import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { fetchTopAlbums, fetchSongs } from './api/api';
import { useEffect, useState } from 'react';
// import Card from "./Components/Card/Card";
import Section from './Components/Section/Section';
import styles from './App.module.css';
import Divider from '@mui/material/Divider';

export default function App() {
  const [data, setData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const generateSongsData = value => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = 'rock';
    } else if (value === 2) {
      key = 'pop';
    }
    const res = songsData.filter(item => item.genre.key === key);
    filteredData(res);
  };

  const filteredData = val => {
    console.log(val);
    setFilteredDataValues(val);
  };

  useEffect(() => {
    generateSongsData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const generateAllSongData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateData();
    generateAllSongData();
  }, []);

  return (
    <div>
      <Navbar data={data} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          data={data}
          type="album"
          title="Top Albums"
          filteredDataValues={data}
        />
        <Section
          data={data}
          type="album"
          title="New Albums"
          filteredDataValues={data}
        />
        <Divider className={styles.sectionLine} />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}
