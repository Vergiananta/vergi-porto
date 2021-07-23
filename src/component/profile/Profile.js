import { Fragment } from "react";
import './profile.css'
import photo from './output-onlinejpgtools.png';
import { Link } from "react-router-dom";


function Profile() {
    return(
        <Fragment>
            <Link to="/dashboard/biography">
                <img src={photo} className="profile-animation"/>
                </Link>
        </Fragment>
    )
}

export default Profile;