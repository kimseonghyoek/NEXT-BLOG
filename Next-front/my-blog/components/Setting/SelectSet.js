import React from 'react';
import styles from '../../styles/components/Setting/SelectSet.module.scss'

const SelectSet = () => {
  return (
    <div className={styles.setting_set}>
    <span>
      <h1>Settings</h1>
    </span>
    <div>
      <ul>
        <li>
          <p>Personal</p>
        </li>
        <li>
          <p>Account</p>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default SelectSet