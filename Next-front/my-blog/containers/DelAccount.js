import React, { useState } from "react";
import styles from "../styles/containers/DekAccount.module.scss";
import { useRecoilState } from "recoil";
import { email } from "../recoil/store";

const DelAccount = ({ mail }) => {
  // 실제 배포 및 포폴 공유시 admin 이메일 가져와서 보여주기
  const user_email = useRecoilState(email);
  const [del_account, setShowDel] = useState(false);
  const [input_state, setInput] = useState('');
  const [disabled, setDisabled] = useState(true);

  const delUserAccount = () => {
    setShowDel(!del_account);
    setDisabled(true);
  };

  const changeForm = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  const checkVaild = () => {
    mail === input_state ? setDisabled(false) : setDisabled(true);
  }
  
  const submit = () => {
    alert("계정이 삭제되었습니다.")
  }

  return (
    <div className={styles.del_account}>
      <div>
        <span className={styles.tags}>Deleted Account</span>
        <button
          className={del_account ? styles.del_btn : styles.nom_btn}
          onClick={delUserAccount}
        >
          {del_account ? "Really ?" : "Delete"}
        </button>
      </div>
      {del_account ? (
        <div>
          <p className={styles.notice_text}>
            계정을 삭제하실려면 이메일을 입력하세요.
          </p>
          <div className={styles.inputs}>
            <h3>{ mail }</h3>
            <div className={styles.forms}>
              <input placeholder="Edit your email" onChange={changeForm} onKeyUp={checkVaild}></input>
              <button onClick={submit} disabled={disabled}>Submit</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DelAccount;
