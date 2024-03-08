

// import  { useEffect, useState } from 'react'
// import { AuthService } from '../../utils/zynerator/security/Auth.service';
// import { useNavigate } from 'react-router';


// export const Navigate = () => {
//     const authService = new AuthService();
//     const [isTokenValid, setIsTokenValid] = useState<boolean | null>();
//     const navigate=useNavigate()
    
//     useEffect(() => {
//         const isTokenValid = authService.isUserLoggedIn();
//         console.log("isTokenValid", isTokenValid);
//         console.log(isTokenValid);
//         setIsTokenValid(isTokenValid)
        
//     }, []);

//     if (isTokenValid == true) {       
//         navigate("/dashboard")
//     }
//     return (
//     <div></div>
//   )
// }
