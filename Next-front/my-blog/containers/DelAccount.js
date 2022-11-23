import React, { useState } from 'react';
import styles from '../styles/containers/DekAccount.module.scss';
import { useRecoilState } from 'recoil';
import { email } from '../recoil/store';

const DelAccount = () => {
  
  const user_email = useRecoilState(email);
  const [del_account, setShowDel] = useState(false);
  
  const delUserAccount = () => {
    setShowDel(!del_account);
  }
  return (
    <>
      <div>
        <span className={styles.tags}>Deleted Account</span>
        <button className={del_account ? styles.del_btn : styles.nom_btn} onClick={delUserAccount}>{del_account ? 'Really?' : 'Delete?' }</button>
      </div>
      {
        del_account ? <div>
          <p className={styles.notice_text}>계정을 삭제하실려면 이메일을 입력하세요.</p>
          <h3>TEST EMAIL</h3>
          <input placeholder='Edit your email'></input>
        </div> : null
      }
    </>
  )
}

export default DelAccount;