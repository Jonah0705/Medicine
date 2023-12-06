import { useAuth0 } from "@auth0/auth0-react";
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
            className="border border-gray-900 lg:ml-[-40px] Avatar"
            src={user.picture}
        />
        )
    )
}

export default AvatarPicture;