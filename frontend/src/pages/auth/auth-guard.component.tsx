
import React, { useEffect, useState } from 'react';
import { AuthService } from '../../utils/zynerator/security/Auth.service';
import { useNavigate } from 'react-router';
type AuthGuardProps = {
    children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const authService = new AuthService();
    const [isTokenValid, setIsTokenValid] = useState<boolean | null>();
    const navigate=useNavigate()

    useEffect(() => {
        const isTokenValid = authService.isUserLoggedIn();
        console.log("isTokenValid", isTokenValid);
        console.log(isTokenValid);
        setIsTokenValid(isTokenValid)
        
    }, []);

    if (isTokenValid == true) {
        return <>{children}</>;
    }
    if (isTokenValid == false) {
        navigate("/auth")

        return (
            <div>
       </div>
        
        )
    }


    return  <>{children}</>
};
export default AuthGuard
