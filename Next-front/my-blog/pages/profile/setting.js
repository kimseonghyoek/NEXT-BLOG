import React from "react";
import styles from "../../styles/Setting.module.scss";
import Header from "../../components/Navbar/Header";

const Setting = () => {
  return (
    <div className={styles.set}>
      <Header />
      <div className={styles.row_set}>
        <div className={styles.setting_set}>
          <span>
            <h1>Setting</h1>
            <p>계정을 설정 및 변경합니다.</p>
          </span>
          <div>
            <ul>
              <li>
                <p>Personal</p>
              </li>
              <li>
                <p>Account</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.mainContent}>
          <span>
            <h1>Personal</h1>
            <p>본인의 정보를 수정할 수 있습니다.</p>
          </span>
          <hr />
          <div>
            <div>
              <label>핸드폰 번호</label>
              <input placeholder=""/>
            </div>
            <div>
              <label>현재 내 직장</label>
              <input placeholder=""/>
            </div>
            <div>
              <label>Insta ID</label>
              <input placeholder=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
