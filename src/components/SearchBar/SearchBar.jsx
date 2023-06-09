import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
   return (
      <div className={styles.container}>
         <input className={styles.input} type='search' />
         <button className={styles.button} onClick={() => onSearch('Esto es un ID')}>Agregar</button>
      </div>
   );
}
