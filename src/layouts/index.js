import Topbar from '../components/Header/Topbar';
import Footer from '../components/Footer/Footer';

export default function MainLayout({ children }) {
    return (
        <>
            <Topbar />
            {children}
            <Footer />
        </>
    );
}