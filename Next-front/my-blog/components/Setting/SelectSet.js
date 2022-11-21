import React, { useEffect, useRef, useState } from "react";
import { SelectItems } from "./SelectItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Desktop, Tablet } from "../../components/useResponsive";
import styles from "../../styles/components/Setting/SelectSet.module.scss";
import { useRecoilState } from "recoil";
import { pw, setting_item, show_item } from "../../recoil/store";
import { useMediaQuery } from "react-responsive";

const SelectSet = () => {
  const [item_state, setItemState] = useRecoilState(show_item);
  const [setting_items, setSetting] = useRecoilState(setting_item);

  const onShowItem = () => {
    item_state ? setItemState(false) : setItemState(true);
    console.log(item_state);
  };

  const onChangedItemState = (key) => {
    setSetting(key);
  };

  useEffect(() => {
    setItemState(item_state);
  });

  return (
    <div className={styles.setting_set}>
      <span>
        <div className={styles.row}>
          <button>
            <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
          </button>
          <h1>User Profiles</h1>
        </div>
        <button onClick={onShowItem}>
          {
            item_state ? <FontAwesomeIcon className={styles.icon} icon={faAngleUp} /> : <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
          }
        </button>
      </span>
      <div>
        {item_state
          ? SelectItems.map((item) => {
              return (
                <li
                  onClick={() => {
                    onChangedItemState(item.name);
                  }}
                  key={item.name}
                >
                  <a>{item.name}</a>
                </li>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SelectSet;
