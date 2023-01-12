import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
import {
  AppstoreOutlined,
  PoundCircleOutlined,
  SettingOutlined,
  GlobalOutlined,
  ClusterOutlined,
} from "@ant-design/icons";

import "./Nav.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}></div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="Anchor1"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={closeMenu}
            >
              各类官网
              <GlobalOutlined />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Anchor2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              CCU计算
              <ClusterOutlined />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Anchor3"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              舰船信息
              <SettingOutlined />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Anchor4"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              交易平台
              <PoundCircleOutlined />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
