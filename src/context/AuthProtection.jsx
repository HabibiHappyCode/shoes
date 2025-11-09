import { useEffect } from "react";
import useAuthStore from "./AuthContext"
import { redirect } from "react-router-dom";

function AuthProtection({ children }) {
    const { isLoggedIn } = useAuthStore();

    useEffect(() => {
        if (!isLoggedIn) {
            return redirect('/login')
        }
    }, [])

    return (
        { children }
    )
}

export default AuthProtection
