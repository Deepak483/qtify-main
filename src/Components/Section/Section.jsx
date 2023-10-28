import React from 'react';
import styles from './Section.module.css';
import { Box, CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../Tabs/Tabs';

const Section = ({
  title,
  data,
  type,
  filteredData = null,
  filteredDataValues = [],
  toggle = false,
  handleToggle = null,
  value = 0,
  handleChange = 0,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!toggle ? 'Show All' : 'Collapse All'}
        </h4>
      </div>
      {type === 'song' ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardsWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map(item => {
                return <Card data={item} type={type} key={item.id} />;
              })}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              componentRender={data => (
                <Card data={data} type={type} key={data.id} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Section;
