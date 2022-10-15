import React from 'react';
import LoginForm from '../../components/LoginForm';
import styles from '../../styles/Signin.module.scss';

const Signin = () => {
  return (
    <div className={styles.signin}>
      <LoginForm/>
    </div>
  )
}

export default Signin;