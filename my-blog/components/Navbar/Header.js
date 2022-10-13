import React from "react";
import styels from "../../styles/components/Navbar/Header.module.scss";
import Item from "./Item.js";
import { NavItem } from "./NavItems";

const Header = () => {
  return (
    <div className={styels.navbar}>
      <span>
        <h1>Next-B</h1>
      </span>
      <div>
        <ul>
          {
            NavItem.map((item, key) => {
              return (
                <Item title={item.name} link={item.link} key={key}/>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;