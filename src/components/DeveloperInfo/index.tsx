import React from 'react';
import Image from 'next/image';

import styles from './style.module.scss';

interface Developer {
  img: string;
  fullName: string;
  description: string;
}

export const DeveloperInfo = ({ img, description, fullName }: Developer) => {
  return (
    <div className={styles.developer}>
      <Image className={styles.developer__img} src={img} alt="" height={200} width={200} />
      <span className={styles.developer__fullname}>{fullName}</span>
      <p className={styles.developer__description}>{description}</p>
    </div>
  );
};
