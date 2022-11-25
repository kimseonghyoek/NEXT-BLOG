import React from "react";
import ToggleBar from "../../components/DefaultComponents/ToggleBar";
import styles from "../../styles/containers/SettingCom.module.scss";
import DelAccount from "../DelAccount";

const SettingCom = () => {
  return (
    <div className={styles.settingCom}>
      <h1 className={styles.title}>Setting</h1>
      <div className={styles.contents}>
        <h2>Display Setting</h2>
        <div>
          <span className={styles.tags}>Dark Mode</span>
          <ToggleBar />
        </div>
        <div>
          <h2>Account Setting</h2>
          <div>
            <DelAccount mail="admin@test.com"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingCom;
