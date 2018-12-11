import React from "react";
import { Link } from 'react-router-dom'
import "./NavigationBlock.css";

export const NavigationBlock = () => {
  return <div className="nav-menu-wrapper">
    <div className="main-menu-container">
      <div className="main-menu">
        <ul className="main-menu-list">
          <li className="menu-list main-menu-list__clothes">
            <ul className="menu-list-add-open">
              <Link to="/clothes" style={{ textDecoration: "none" }} className="main-menu-list__link main-menu-list__link-clothes">
                Одежда и аксессуары
                       </Link>
              <div className="add-menu-container">
                <div className="add-menu">
                  <ul className="add-menu-list">
                    <li className="menu-list-add add-menu-list__women">
                      <Link to="/women" style={{ textDecoration: "none" }} className="add-menu-list__link">
                        Женская одежда
                               </Link>
                    </li>
                    <li className="menu-list-add add-menu-list__men">
                      <Link to="/men" style={{ textDecoration: "none" }} className="add-menu-list__link">
                        Мужская одежда
                               </Link>
                    </li>
                    <li className="menu-list-add add-menu-list__accessories">
                      <Link to="/accessories" style={{ textDecoration: "none" }} className="add-menu-list__link">
                        Аксессуары
                               </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li className="menu-list main-menu-list__shoes">
            <Link to="/shoes" style={{ textDecoration: "none" }} className="main-menu-list__link">
              Обувь
                     </Link>
          </li>
          <li className="menu-list main-menu-list__jewelry">
            <Link to="/jewellery" style={{ textDecoration: "none" }} className="main-menu-list__link">
              Украшения
                     </Link>
          </li>
          <li className="menu-list main-menu-list__health">
            <Link to="/health" style={{ textDecoration: "none" }} className="main-menu-list__link">
              Красота и здоровье
                     </Link>
          </li>
          <li className="menu-list main-menu-list__for-house">
            <Link to="/houselold" style={{ textDecoration: "none" }} className="main-menu-list__link">
              Товары для дома
                     </Link>
          </li>
          <li className="menu-list main-menu-list__for-kitchen">
            <Link to="/kitchen" style={{ textDecoration: "none" }} className="main-menu-list__link">
              Товары для кухни
                     </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>;
};
