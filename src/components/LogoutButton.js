import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-tailwind/react";
import "../index.css"; // Import your custom styles last


const LogoutButton = ({className}) => {
    const {logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <Button variant="gradient" size="sm" color="red" onClick={() => logout()} className={className}>
                <span>Log Out</span>
            </Button>
        )
    )
}

export default LogoutButton