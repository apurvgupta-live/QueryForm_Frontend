import React from "react";
import styles from "./styles.module.scss";
import ReadProLogo from "../../assets/readPro_logo.png";
import { FaUserCircle } from "react-icons/fa";
const NavBar = () => {
  return (
    <>
      <div className={styles.navbar_main_container}>
        <img src={ReadProLogo} className={styles.img_logo} />
        <ul className={styles.nav_bar_list}>
          <li>
            <a>Query Details</a>
          </li>
          {/* <li>
            <a>Contacts</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Tasks</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a>Call Logs</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Api</a>
          </li>
          <li>
            <a>Lead Distribution</a>
          </li> */}
        </ul>
        <div style={{ flex: 1 }}></div>
        <div className={styles.second_container}>
          <p>Knowledge Center</p>
          <FaUserCircle size={30} color="grey" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
