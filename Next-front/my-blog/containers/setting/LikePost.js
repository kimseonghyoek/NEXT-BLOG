import React from 'react';
import PostComponents from '../../components/PostComponents';
import styles from '../../styles/containers/LikePost.module.scss';

const LikePost = () => {
  return (
    <div className={styles.like_post}>
      <h1>This is Like Post</h1>
      <div className={styles.post_list}>
        <PostComponents/>
        <PostComponents/>
      </div>
    </div>
  )
}

export default LikePost;