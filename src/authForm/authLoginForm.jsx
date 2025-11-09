import React, { useEffect } from 'react'
import useAuthStore from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function AuthLoginForm() {
    const { signIn, error, logOut } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            logOut(navigate)
        }, 1 * 60 * 60 * 1000);
    }, [signIn])

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const username = data.get('username');
        const password = data.get('password');

        signIn(username, password, navigate)
    };

    const handleNavigate = () => {
        navigate('/signUp')
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="username">Username *</label>
                <input type="text" name='username' required />
            </p>

            <p>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required />
            </p>

            {error && <p className='error'>{error}</p>}

            <p onClick={handleNavigate} className='new_account'>Don't have an account? <strong>signUp</strong></p>

            <button>Submit</button>
        </form>
    )
}

export default AuthLoginForm
