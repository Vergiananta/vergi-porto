import './profile.css'
import photo from '../../assert/profile/profiles.png';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Profile() {

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    return (
        <>
            <Link to="/dashboard/biography">
                <img data-aos="zoom-in-left" src={photo} className="profile-animation" alt="Profile" />
            </Link>
        </>
    )
}

export default Profile;