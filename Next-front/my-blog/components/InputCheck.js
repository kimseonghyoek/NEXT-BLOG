import React from 'react';
import style from '../styles/components/common/InputCheck.module.scss';

const InputCheck = ({ notice }) => {
  return (
    <div className={style.input_check}>
      <p>{notice}</p>
    </div>
  )
}

export default InputCheck;