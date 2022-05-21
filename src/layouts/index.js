import GuestTopBar from '../components/Header/GuestTopBar/index';
import UserTopBar from '../components/Header/UserTopBar/index';
import AdminTopBar from '../components/Header/AdminTopBar/index';
import Footer from '../components/Footer/index';


// Có 3 loại Top bar: Khách, User, Admin
export default function MainLayout({ children }) {
    return (
        <>
            <UserTopBar />
            {children}
            <Footer />
        </>
    );
}