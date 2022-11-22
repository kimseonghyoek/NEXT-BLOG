import React, { useState } from 'react';
import styles from '../../styles/components/Toggle.module.scss';

const ToggleBar = () => {
  
  const [isCheck, setCheck] = useState(false);

  const onChangedValue = () => {
    setCheck(!isCheck);
    console.log(isCheck)
  }

  return (
    <>
      <button className={isCheck ? styles.true : styles.false} onClick={onChangedValue}>{isCheck ? `(O_O)` : '(-_-)'}</button>
    </>
  )
}

export default ToggleBar;