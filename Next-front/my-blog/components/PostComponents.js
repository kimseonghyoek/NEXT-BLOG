import React from 'react';
import Image  from 'next/image';
import styles from '../styles/components/PostComponents.module.scss';

const PostComponents = ({ thumbnail_img, title, author}) => {
  
  const goPostLink = () => {
    alert('오옹')
  }
  
  return (
    <div onClick={goPostLink} className={styles.post}>
      <Image src={thumbnail_img} width={230} height={140} className={styles.image}/>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  )
}

PostComponents.defaultProps = {
  thumbnail_img: "/growDev.jpg",
  title: "성장하는 개발자란.",
  author: "@admin"
}



export default PostComponents;