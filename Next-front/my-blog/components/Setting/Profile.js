import Image from "next/image";
import React from "react";
import styles from '../../styles/components/Setting/Profile.module.scss';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <span>
        <h1>My Profile Image</h1>
        <p>자신의 프로필 사진을 설정할 수 있어요</p>
      </span>
      <div className={styles.image}>
        <Image src={props.image} alt="" width={220} height={220} />
      </div>
      <button>Edit Your Profile Image</button>
    </div>
  );
};

Profile.defaultProps = {
  image: "/guest.png"
}

export default Profile;