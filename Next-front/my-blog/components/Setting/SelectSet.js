import React from 'react';
import { SelectItems } from './SelectItems';
import styles from '../../styles/components/Setting/SelectSet.module.scss'

const SelectSet = () => {
  return (
    <div className={styles.setting_set}>
    <span>
      <h1>User Profile</h1>
    </span>
    <div>
      <ul>
      {
        SelectItems.map((item, map, key) => {
          return (
            <li  key={key}><a>{item.name}</a></li>
          )
        })
      }
      </ul>
    </div>
  </div>
  );
}

export default SelectSet