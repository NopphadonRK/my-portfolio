import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  function getNavClass(navLinkProps) {
    let navClass = "Header-menu-item";
    if (navLinkProps.isActive) navClass += " app-header-item-active";
    return navClass;
  }

  return (
    <div className="Header">
      <hr className="Header-line" />
      <div className="Header-menu-items">
        <NavLink className={getNavClass} to="/" exact>
          <p className="text-hd">Home</p>
        </NavLink>
        <NavLink className={getNavClass} to="/about">
          <p className="text-hd">About</p>
        </NavLink>
        <NavLink className={getNavClass} to="/skill">
          <p className="text-hd">Skill</p>
        </NavLink>
        <NavLink className={getNavClass} to="/project">
          <p className="text-hd">Projects</p>
        </NavLink>
        <NavLink className={getNavClass} to="/contact">
          <p className="text-hd">Contact</p>
        </NavLink>
      </div>
      <hr className="Header-line" />
    </div>
  );
}

export default Header;
