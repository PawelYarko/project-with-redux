// import {useSelector, useDispatch} from 'react-redux';
// import {increment , decrement} from '../redux/slice/slice';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';

const Layout = () =>{
    const isUserLoggedIn = useSelector(state => state.user.isLoggedIn);
    console.log(isUserLoggedIn)
    return(
        <>
        <nav>
            <Link to="/login">Log in</Link>
        </nav>
        <Outlet/>
        {isUserLoggedIn && <UserMenu/>}
        </>
    )
}

export default Layout;