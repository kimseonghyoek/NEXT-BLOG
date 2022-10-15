import React, { useState, useSyncExternalStore } from "react";
import styles from "../styles/components/LoginForm.module.scss";
import { useRouter } from "next/router";

const LoginForm = () => {
  const location = useRouter();
  const path = location.pathname;

  const [userName, setUserName] = useState("User");
  const [checked, setCheck] = useState(false);
  const [able, setAble] = useState(true);

  const changeName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const onCheck = () => {
    if (!checked) {
      setCheck(true);
    }
    if (checked === true) {
      setCheck(false);
    }
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={submit}>
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
            <input type="checkbox" checked={checked} onChange={onCheck} />
            <p>{userName} 은(는) 회원가입에 동의합니다.</p>
          </div>
          <button disabled={!checked}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
