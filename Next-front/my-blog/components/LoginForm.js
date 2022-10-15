import React, { useState, useSyncExternalStore } from "react";
import styles from "../styles/components/LoginForm.module.scss";
import { useRouter } from "next/router";
import Social from "./Social";

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
          {path === "/auth/signup" ? (
            <>
              <div className={styles.rowBox}>
                <input placeholder="Nick Name" onChange={changeName} />
                <input placeholder="Birth (YYYYMMDD)" type="number" />
              </div>
            </>
          ) : null}
          <input placeholder="Your Email" />
          <input placeholder="Your Password" type="password" />
          {path === "/auth/signup" ? (
            <input placeholder="Confirm Password" type="password" />
          ) : null}
          {path === "/auth/signup" ? (
            <div className={styles.check}>
              <input type="checkbox" checked={checked} onChange={onCheck} />
              <p>{userName} 은(는) 회원가입에 동의합니다.</p>
            </div>
          ) : (
            <div className={styles.social}>
              <h2>소셜 로그인</h2>
              <hr />
              <div className={styles.socialList}>
                <Social/>
                <p>인스타</p>
                <p>카카오</p>
                <p>네이버</p>
                <p>구글</p>
              </div>
            </div>
          )}
          {path === "/auth/signin" ? (
            <button>Sign in</button>
          ) : (
            <button disabled={!checked}>Sign up</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
