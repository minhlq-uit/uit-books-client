import AccountNav from "../components/MyAccount/AccountNav/AccountNav";
import MainLayout from "./index";

export default function AccountLayout({ children }) {
  return (
    <>
      <MainLayout>
        <div className="container my-account" style={{ margin: 20 }}>
          <div className="row">
            <AccountNav />
            {children}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
