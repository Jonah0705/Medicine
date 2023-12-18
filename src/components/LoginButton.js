import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-tailwind/react";
import "../index.css"; // Import your custom styles last


const LoginButton = ({className}) => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
            <Button onClick={() => loginWithRedirect()} variant="gradient" size="sm" color="purple" className={className}>
            <span>Log In</span>
            </Button>
        )
    )
}

export default LoginButton