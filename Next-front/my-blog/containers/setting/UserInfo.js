import Image from "next/image";
import React from "react";
import styles from "../../styles/containers/UserInfo.module.scss";

const UserInfo = ({ user_image, user_name, user_bio }) => {
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
              <input></input>
            </div>
            <div className={styles.inputs}>
              <p>Email</p>
              <input></input>
            </div>
            <div className={styles.inputs}>
              <p>Bio</p>
              <input></input>
            </div>
          </div>
          <div className={styles.half_wrap}>
            <div className={styles.inputs}>
              <p>Phone Number</p>
              <input></input>
            </div>
            <div className={styles.inputs}>
              <p>Password</p>
              <input></input>
            </div>
            <div className={styles.inputs}>
              <p>Location</p>
              <input></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

UserInfo.defaultProps = {
  user_image: "/guest.png",
  user_name: "Default user_name",
  user_bio: "Hi, there!",
};

export default UserInfo;
