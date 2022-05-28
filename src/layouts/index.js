import Topbar from '../components/Header/Topbar';
import Footer from '../components/Footer/index';


// Có 3 loại Top bar: Khách, User, Admin
export default function MainLayout({ children }) {
    return (
        <>
            <Topbar />
            {children}
            <Footer />
        </>
    );
}