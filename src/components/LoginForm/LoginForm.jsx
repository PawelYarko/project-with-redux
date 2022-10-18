import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authSlice';


const LoginForm = () =>{
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.currentTarget;
        // console.log(form.elements.email.value)
        // console.log(form.elements.email.password)
        dispatch(logIn(form.elements.email.value));
        // form.reset();
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="" placeholder="email"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">Log in</button>
        </form>
        </>
    )
}

export default LoginForm;