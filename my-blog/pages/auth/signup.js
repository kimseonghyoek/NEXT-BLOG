import React from "react"
import LoginForm from "../../components/LoginForm";
import styles from '../../styles/Signup.module.scss'

const Signup = () => {
  return (
    <div className={styles.signup}>
      <LoginForm/>
    </div>
  )
}

export default Signup; 