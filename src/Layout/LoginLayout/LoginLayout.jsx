import Header from '../../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>   
        </>
    );
};

export default LoginLayout;