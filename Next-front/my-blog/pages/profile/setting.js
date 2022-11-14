import React from "react";
import styles from "../../styles/Setting.module.scss";
import Header from "../../components/Navbar/Header";
import Image from "next/image";
import SelectSet from "../../components/Setting/SelectSet";

const Setting = () => {
  return (
    <div className={styles.set}>
      <Header />
      <div className={styles.row_set}>
        <SelectSet />

        <div className={styles.mainContent}>
          <span>
            <h1>Personal</h1>
            <p>본인의 정보를 수정할 수 있습니다.</p>
          </span>
          <hr />
          <div className={styles.forms}>
            <div className={styles.inputs}>
              <label>핸드폰 번호</label>
              <input placeholder="" />
            </div>
            <div className={styles.inputs}>
              <label>현재 내 직장</label>
              <input placeholder="" />
            </div>
            <div className={styles.inputs}>
              <label>Insta ID</label>
              <input placeholder="" />
            </div>
            <div className={styles.inputs}>
              <label>내 커리어</label>
              <input placeholder="" />
            </div>
            <div className={styles.inputs}>
              <label>성별</label>
              <input placeholder="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;