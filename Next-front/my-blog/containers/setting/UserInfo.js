import Image from "next/image";
import React from "react";
import styles from "../../styles/containers/UserInfo.module.scss";

const UserInfo = ({ user_image, user_name, user_bio }) => {
  return (
    <div className={styles.user_info}>
      <Image src={user_image} width={150} height={150} id={styles.user_image} />
      <div className={styles.flex_col}>
        <h2>{user_name}</h2>
        <h2>{user_bio}</h2>
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
