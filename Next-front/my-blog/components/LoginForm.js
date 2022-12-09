import React, { useEffect, useState, useSyncExternalStore } from "react";
import styles from "../styles/components/LoginForm.module.scss";
import { useRouter } from "next/router";
import Social from "./Social";
import { useRecoilState } from "recoil";
import { birth, nickname, email, pw } from "../recoil/store";
import axios from "axios";
import InputCheck from "./InputCheck";

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
  const [email_check, setCheckEmail] = useState(false);

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
    setCheckEmail(false);
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    e.preventDefault();
    setPw(e.target.value);
  };

  const onChangerePw = (e) => {
    e.preventDefault();
    setRePw(e.target.value);
  };

  const onCheck = () => {
    if (!checked) {
      setCheck(true);
    }
    if (checked === true) {
      setCheck(false);
    }
  };

  const Login = (e) => {
    e.preventDefault();

    if (userEmail === "") {
      alert("이메일이 빈 칸 입니다.");
      post = false;
    }

    if (userPw === "") {
      alert("비밀번호가 빈 칸 입니다.");
      post = false;
    }

    if(post === true) {
      axios.post(`http://localhost:8000/auth/signin`, {
        body: {
          email: userEmail,
          pw: userPw,
        }
      })
    }

    alert("로그인");
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
    } else if (userBirth.length !== 8) {
      post = false;
      alert("날짜 형식이 잘 못 되었습니다.");
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
      axios
        .post(`http://localhost:8000/auth/signup`, {
          body: {
            email: userEmail,
            birth: userBirth,
            nickname: userName,
            pw: userPw,
          },
        })  
        .then((res) => {
          if(res.status === 200) {
            alert('계정 가입이 완료 되었습니다.');
            setEmail("");
            setPw("");
            location.push({pathname: '/auth/signin'});
          }
        })
        .catch((err) => {
          if(err.response.data === 'have_user') {
            setCheckEmail(true);
          }
        });
    }
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={path === "/auth/signup" ? submit : Login}>
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
          <div className={styles.emails}>
            <input placeholder="Your Email" onChange={onChangeEmail} />
            {
              email_check ? <InputCheck notice={`이미 사용중인 이메일입니다.`} /> : null
            }
          </div>
          <input
            placeholder="Your Password"
            type="password"
            onChange={onChangePw}
          />
          {path === "/auth/signup" ? (
            <input
              placeholder="Confirm Password"
              type="password"
              onChange={onChangerePw}
            />
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
            <div className={styles.buttons}>
              <button disabled={!checked}>Sign up</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
