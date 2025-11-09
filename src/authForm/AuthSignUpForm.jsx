import { useNavigate } from 'react-router-dom';
import useAuthStore from '../context/AuthContext';

function AuthSignUpForm() {
    const { signUp } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const fd = new FormData(event.target);
        const userData = Object.fromEntries(fd.entries());

        signUp(userData, navigate)
    }

     const handleNavigate = () => {
        navigate('/login')
    };
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="username">Username *</label>
                <input type="text" name='username' required />
            </p>

            <p>
                <label htmlFor="firstname">First Name *</label>
                <input type="text" name='firstname' required />
            </p>

            <p>
                <label htmlFor="surname">Surname *</label>
                <input type="text" name='surname' required />
            </p>

            <p>
                <label htmlFor="email">Email *</label>
                <input type="email" name='email' required />
            </p>

            <p>
                <label htmlFor="password">Password *</label>
                <input type="password" name='password' required />
            </p>

            <p>
                <label htmlFor="password">Confirm Password *</label>
                <input type="password" name='confrim_password' required />
            </p>

             <p onClick={handleNavigate} className='new_account'>Already have an account? <strong>signIn</strong></p>

            <button>Sign Up</button>
        </form>
    )
}

export default AuthSignUpForm
