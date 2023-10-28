import { Chip } from '@mui/material';
import React from 'react';
import styles from './Card.module.css';
import { Tooltip } from '@mui/material';

const Card = ({ data, type }) => {
  const getData = type => {
    switch (type) {
      case 'album':
        // eslint-disable-next-line no-unused-vars
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs?.length} Songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    className={styles.chip}
                    label={`${follows} Follows`}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      default:
        return <></>;
    }
  };
  return getData(type);
};

export default Card;
