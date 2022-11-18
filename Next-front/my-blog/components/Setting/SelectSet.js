import React, { useState } from "react";
import { SelectItems } from "./SelectItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Desktop, Tablet } from '../../components/useResponsive';
import styles from "../../styles/components/Setting/SelectSet.module.scss";

const SelectSet = () => {
  const [item_state, setItemState] = useState(false);

  const onShowItem = () => {
    item_state ? setItemState(false) : setItemState(true);
    console.log(item_state);
  };

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
          <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
        </button>
      </span>
      <div>
        <ul>
          <Tablet>
          {item_state
            ? SelectItems.map((item) => {
                return (
                  <div className={styles.items}>
                    <li key={item.key}>
                      <a>{item.name}</a>
                    </li>
                  </div>
                );
              })
            : null}
          </Tablet>
          <Desktop>
           {
            SelectItems.map((item) => {
              return (
                <div className={styles.items}>
                  <li key={item.key}>
                    <a>{item.name}</a>
                  </li>
                </div>
              );
            })
           }
          </Desktop>
        </ul>
      </div>
    </div>
  );
};

export default SelectSet;
