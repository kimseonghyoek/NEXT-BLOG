import React, { useState } from "react";
import styles from "../styles/components/LoginForm.module.scss";
import { useRouter } from "next/router";

const LoginForm = () => {
  const location = useRouter();
  const path = location.pathname;

  const [userName, setUserName] = useState("User");

  const changeName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  return (
    <div className={styles.loginForm}>
      <h1></h1>
      {path === "/auth/signup" ? <h1>Sign up</h1> : <h1>Login</h1>}
      <div className={styles.contents}>
        <div className={styles.rowBox}>
          <input placeholder="Nick Name" onChange={changeName} />
          <input placeholder="Birth" />
        </div>
        <input placeholder="Your Email" />
        <input placeholder="Your Password" />
        <input placeholder="Confirm Password" />
        <div className={styles.check}>
          <input type="checkbox" />
          <p>{userName} 은(는) 회원가입에 동의합니다.</p>
        </div>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default LoginForm;
