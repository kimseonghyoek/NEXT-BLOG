import React from "react";
import SelectSet from "../components/Setting/SelectSet";
import styles from "../styles/test.module.scss";
import UserInfo from "../containers/setting/UserInfo";

const Test = () => {
  return (
    <html className={styles.test}>
      <div>
        {/* <SelectSet /> */}
        <UserInfo/>
      </div>
    </html>
  );
};

export default Test;
