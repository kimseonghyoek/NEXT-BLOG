import React from 'react';
import { useRecoilState } from 'recoil';
import SettingCom from '../../containers/setting/SettingCom';
import UserInfo from '../../containers/setting/UserInfo';
import { setting_item } from '../../recoil/store'; 
import LikePost from '../../containers/setting/LikePost';

const MainContent = () => {
  
  const [set_item, setItem] = useRecoilState(setting_item);
  
  if(set_item === 'User Info') {
    return (
      <>
        <UserInfo/>
      </>
    )
  } 
  if (set_item === 'Setting') {
    return (
      <>
        <SettingCom/>
      </>
    )
  } else if (set_item === 'Like Post') {
    return (
      <>
        <LikePost/>
      </>
    )
  }
} 

export default MainContent;