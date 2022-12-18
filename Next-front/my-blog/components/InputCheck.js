import React from 'react';
import { useRecoilState } from 'recoil';
import { check_input } from '../recoil/store';
import style from '../styles/components/common/InputCheck.module.scss';

const InputCheck = ({ notice }) => {

  const [show_notice] = useRecoilState(check_input);

  return (
    <div className={style.input_check}>
      <p>{notice}</p>
    </div>
  )
}

export default InputCheck;