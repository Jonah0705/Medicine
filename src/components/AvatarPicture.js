import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-tailwind/react";
import {
    Avatar
} from "@material-tailwind/react";
import "../index.css"; // Import your custom styles last


const AvatarPicture = () => {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <Avatar variant="circular"
            size="sm"
            alt="avatar"
            className="border border-gray-900 p-0.5 mr-2"
            src={user.picture}
        />
        )
    )
}

export default AvatarPicture;