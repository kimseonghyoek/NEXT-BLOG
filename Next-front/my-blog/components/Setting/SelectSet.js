import React, { useState } from 'react';
import { SelectItems } from './SelectItems';
import styles from '../../styles/components/Setting/SelectSet.module.scss'

const SelectSet = () => {

  const [item_state, setItemState] = useState('User Profiles');

  return (
    <div className={styles.setting_set}>
    <span>
      <h1>{item_state}</h1>
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