import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import NotLoggedIn from "../components/NotLoggedIn";
import ProfileCard from "../components/ProfileCard";
import History from "../components/History";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (

            <div className="flex mb-10">
                <ProfileCard /><History />
            </div>
        ) : (
            <NotLoggedIn />
        )
    );
}

export default Profile;