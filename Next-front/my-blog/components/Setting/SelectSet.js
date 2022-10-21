import React from 'react';
import styles from '../../styles/components/Setting/SelectSet.module.scss'

const SelectSet = () => {
  return (
    <div className={styles.setting_set}>
    <span>
      <h1>Setting</h1>
      <p>계정을 설정 및 변경합니다.</p>
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
  )
}

export default SelectSet