import Link from "next/link";
import React from "react";
import styles from "../../styles/components/Navbar/Items.module.scss";

const Item = ({ title, link }) => {
  return (
    <div className={styles.items}>
      <li>
        <Link href={link}>
          <p>{title}</p>
        </Link>
      </li>
    </div>
  );
};

Item.defaultProps = {
  link: "#",
  title: "title"
}

export default Item;
