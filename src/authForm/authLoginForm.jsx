import React from 'react'

function AuthLoginForm() {
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

            <button>Submit</button>
        </form>
    )
}

export default AuthLoginForm
