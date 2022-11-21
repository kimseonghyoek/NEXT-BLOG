import React from 'react';
import { useRecoilState } from 'recoil';
import SettingCom from '../../containers/setting/SettingCom';
import UserInfo from '../../containers/setting/UserInfo';
import { setting_item } from '../../recoil/store'; 

const MainContent = () => {
  
  const [set_item, setItem] = useRecoilState(setting_item);
  
  if(set_item === 0) {
    return (
      <>
        <UserInfo/>
      </>
    )
  } else if (set_item === 1) {
    return (
      <>
        <SettingCom/>
      </>
    )
  } else if (set_item === 2) {
    return (
      <>
        {/* Like Post */}
      </>
    )
  }
} 

export default MainContent;