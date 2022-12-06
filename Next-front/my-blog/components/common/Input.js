import React from 'react';
import styles from '../../styles/components/common/Input.module.scss';

const Input = ({ placeholder, onChange, style }) => {
  return (
    <>
      <input placeholder={placeholder} onChange={onChange} className={styles.style}/>
    </>
  )
}

Input.defaultProps = {
  placeholder: '',
  style: 'default'
}

export default Input; 