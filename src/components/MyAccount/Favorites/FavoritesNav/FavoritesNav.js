import { NavLink } from "react-router-dom";
import "./FavoritesNav.scss";

function AccountFavoritesNav() {
  return (
    <div className="favorites-nav row">
      <div className="col favorites-nav-product">
        <NavLink to="/favorites-book" activeclassname="active" className="col">
          Sản phẩm (4)
        </NavLink>
      </div>
      <div className="col favorites-nav-post">
        <NavLink to="/favorites-post" activeclassname="active" className="col">
          Bài viết (0)
        </NavLink>
      </div>
    </div>
  );
}

export default AccountFavoritesNav;
