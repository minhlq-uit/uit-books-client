import "./MyOrderNav.scss";
import { NavLink } from "react-router-dom";

function AccountOrderNav() {
  return (
    <div className="order-process-nav row">
      <div className="order-process-nav-shipping col">
        <NavLink activeclassname="active" to="/order-shipping">
          Đang giao
        </NavLink>
      </div>
      <div className="order-process-nav-ordered col">
        <NavLink activeclassname="active" to="/order-ordered">
          Đã giao
        </NavLink>
      </div>
      <div className="order-process-nav-canceled col">
        <NavLink activeclassname="active" to="/order-canceled">
          Đã hủy
        </NavLink>
      </div>
    </div>
  );
}

export default AccountOrderNav;
