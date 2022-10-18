import { useSelector,useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authSlice';


const UserMenu = () =>{
    const dispatch = useDispatch();
    const login = useSelector(state => state.user.email);
    console.log(login)
    return(
        <>
        <p>{login}</p>
        <button onClick={()=>dispatch(logOut())}>Log out</button>
        </>
    )
}

export default UserMenu;