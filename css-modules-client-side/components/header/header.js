import styles from './header.css';
import React from 'react';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.hd__content}>This content styled within the header</div>
  </header>
);
