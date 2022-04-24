import { Outlet } from 'react-router-dom';
import { NavbarLogic } from '../components/NavbarLogic';
export const Navbar = () => {
    return (
        <div className='flex'>
            <NavbarLogic/>
            <Outlet />
        </div>
    )
}
