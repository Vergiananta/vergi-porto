import { Fragment } from "react";
import './profile.css'
import photo from './output-onlinejpgtools.png';


function Profile() {
    return(
        <Fragment>
                <img src={photo} className="profile-animation"/>
        </Fragment>
    )
}

export default Profile;