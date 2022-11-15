import React from "react";
import styles from "../../styles/Setting.module.scss";
import Header from "../../components/Navbar/Header";
import Image from "next/image";
import SelectSet from "../../components/Setting/SelectSet";
import UserInfo from "../../containers/setting/UserInfo";

const Setting = () => {
  return (
    <div className={styles.set}>
      <Header />
      <div className={styles.row_set}>
        <SelectSet />

        <div className={styles.mainContent}>
          <UserInfo/>
        </div>
      </div>
    </div>
  );
};

export default Setting;