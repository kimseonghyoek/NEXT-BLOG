import React, { useEffect } from "react";
import styles from "../../styles/Setting.module.scss";
import Header from "../../components/Navbar/Header";
import Image from "next/image";
import SelectSet from "../../components/Setting/SelectSet";
import UserInfo from "../../containers/setting/UserInfo";
import { useRecoilState } from "recoil";
import { setting_item } from "../../recoil/store";
import SettingCom from "../../containers/setting/SettingCom";
import MainContent from "../../components/Setting/MainContents";
import Head from "next/head";

const Setting = () => {
  return (
    <>
    <Head>
      <title>NB | Profile Setting</title>
    </Head>
    <div className={styles.set}>
      <div className={styles.row_set}>
        <SelectSet />
        <div className={styles.mainContent}>
          <MainContent/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Setting;