import React from 'react'

function AuthSignUpForm() {
    return (
        <form>
            <p>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' required />
            </p>

            <p>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required />
            </p>

            <p>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name='confrim_password' required />
            </p>

            <button>Submit</button>
        </form>
    )
}

export default AuthSignUpForm
