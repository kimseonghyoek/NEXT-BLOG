import React, { useState, useSyncExternalStore } from "react";
import styles from "../styles/components/LoginForm.module.scss";
import { useRouter } from "next/router";
import Social from "./Social";
import { useRecoilState } from "recoil";
import { birth, nickname, email, pw } from "../recoil/store";
import axios from "axios";

const LoginForm = () => {
  const location = useRouter();
  const path = location.pathname;
  let post = true;

  // State
  const [userName, setUserName] = useRecoilState(nickname);
  const [userBirth, setBirth] = useRecoilState(birth);
  const [userEmail, setEmail] = useRecoilState(email);
  const [userPw, setPw] = useRecoilState(pw);
  const [rePw, setRePw] = useState("");
  const [checked, setCheck] = useState(false);

  const onChangeName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const onChangeBirth = (e) => {
    e.preventDefault();
    setBirth(e.target.value);
  };

  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    e.preventDefault();
    setPw(e.target.value);
  };

  const onChangerePw = (e) => {
    e.preventDefault();
    setRePw(e.target.value);
  }

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

    if (userName === "User") {
      alert("닉네임이 빈 칸 입니다.");
      post = false;
    }

    if (userEmail === "") {
      alert("이메일이 빈 칸 입니다.");
      post = false;
    }

    if (userBirth === "") {
      post = false;
      alert("생일이 빈 칸 입니다.");
    } else if (userBirth.length < 1 || userBirth.length >= 9) {
      post = false
      alert("날짜 형식이 잘 못 되었습니다.")
    }

    if (pw === "") {
      post = false;
      alert("비밀번호가 빈 칸 입니다.");
    }

    if (userPw != rePw) {
      post = false;
      alert("비밀번호와 재확인 비밀번호가 다릅니다.");
    }

    if (post === true) {
      alert(post)
      axios
        .post(`http://localhost:8000/auth`, {
          body: {
            email: userEmail,
            birth: userBirth,
            name: userName,
            pw: userPw,
          },
        })
        .then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
    }
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={submit}>
        {path === "/auth/signup" ? <h1>Sign up</h1> : <h1>Login</h1>}
        <div className={styles.contents}>
          {path === "/auth/signup" ? (
            <>
              <div className={styles.rowBox}>
                <input placeholder="Nick Name" onChange={onChangeName} />
                <input
                  placeholder="Birth (YYYYMMDD)"
                  type="number"
                  onChange={onChangeBirth}
                />
              </div>
            </>
          ) : null}
          <input placeholder="Your Email" onChange={onChangeEmail} />
          <input
            placeholder="Your Password"
            type="password"
            onChange={onChangePw}
          />
          {path === "/auth/signup" ? (
            <input placeholder="Confirm Password" type="password" onChange={onChangerePw}/>
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
                <Social />
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
            <button disabled={!checked} onSubmit={submit}>
              Sign up
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
