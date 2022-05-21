import "./sidebar.scss";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CategoryIcon from '@mui/icons-material/Category';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    // const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }} className="uitlogo">
                    <img src='/images/footer/uitbook-logo.png' alt='UITBooks-logo' />
                    <img src='/images/footer/UITBooks.com.png' alt='UIT' />
                </Link>
            </div>
            {/* <hr /> */}
            <div className="center">
                <ul>
                    <p className="title">QUẢN LÝ ADMIN</p>
                    <Link to="/users-manager" style={{ textDecoration: "none" }}>
                        <li>
                            <AccessibilityIcon className="icon" />
                            <span>Quản Lý Người Dùng</span>
                        </li>
                    </Link>
                    <Link to="/category-manager" style={{ textDecoration: "none" }}>
                        <li>
                            <CategoryIcon className="icon" />
                            <span>Quản Lý Thể Loại Sách</span>
                        </li>
                    </Link>
                    <Link to="/book-manager" style={{ textDecoration: "none" }}>
                        <li>
                            <MenuBookIcon className="icon" />
                            <span>Quản Lý Sách</span>
                        </li>
                    </Link>
                    <Link to="/order-manager" style={{ textDecoration: "none" }}>
                        <li>
                            <LocalMallIcon className="icon" />
                            <span>Quản Lý Đơn Hàng</span>
                        </li>
                    </Link>
                    <Link to="/blog-manager" style={{ textDecoration: "none" }}>
                        <li>
                            <RateReviewIcon className="icon" />
                            <span>Quản Lý Blog</span>
                        </li>
                    </Link>
                    <Link to="/statistics" style={{ textDecoration: "none" }}>
                        <li>
                            <AnalyticsIcon className="icon" />
                            <span>Thống Kê</span>
                        </li>
                    </Link>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Đăng Xuất</span>
                    </li>
                </ul>
            </div>
            {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
        </div>
    );
};

export default Sidebar;
