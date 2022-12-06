import Image from "next/image";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { bio, email, location, nickname, phone_num, pw } from "../../recoil/store";
import styles from "../../styles/containers/UserInfo.module.scss";

const UserInfo = ({ user_image, user_name, user_bio }) => {

  // State
  const [info_name, setName] = useRecoilState(nickname);
  const [info_email, setEmail] = useRecoilState(email);
  const [info_pw, setPw] = useRecoilState(pw);
  const [info_phone_num, setPhoneNum] = useRecoilState(phone_num);
  const [info_bio, setBio] = useRecoilState(bio);
  const [info_location, setLocation] = useRecoilState(location);

  const changeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const changeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const changePw = (e) => {
    e.preventDefault();
    setPw(e.target.value);
  }

  const changePhoneNum = (e) => {
    e.preventDefault();
    setPhoneNum(e.target.value);
  }

  const changeBio = (e) => {
    e.preventDefault();
    setBio(e.target.value);
  }

  const changeLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  }

  return (
    <div className={styles.user_info}>
      <h1>User Info</h1>
      <div className={styles.my_info}>
        <Image
          src={user_image}
          width={150}
          height={150}
          id={styles.user_image}
        />
        <div className={styles.flex_col}>
          <h2>{user_name}</h2>
          <h2>{user_bio}</h2>
        </div>
      </div>
      <div className={styles.profile_form}>
        <form>
          <div className={styles.half_wrap}>
            <div className={styles.inputs}>
              <p>Nick Name</p>
              <input onChange={changeName}></input>
            </div>
            <div className={styles.inputs}>
              <p>Email</p>
              <input onChange={changeEmail}></input>
            </div>
            <div className={styles.inputs}>
              <p>Bio</p>
              <input onChange={changeBio}></input>
            </div>
          </div>
          <div className={styles.half_wrap}>
            <div className={styles.inputs}>
              <p>Phone Number</p>
              <input onChange={changePhoneNum}></input>
            </div>
            <div className={styles.inputs}>
              <p>Password</p>
              <input onChange={changePw}></input>
            </div>
            <div className={styles.inputs}>
              <p>Location</p>
              <input></input>
            </div>
          </div>
        </form>
      </div>
      <button>SAVE</button>
    </div>
  );
};

UserInfo.defaultProps = {
  user_image: "/guest.png",
  user_name: "Default user_name",
  user_bio: "Hi, there!",
};

export default UserInfo;
