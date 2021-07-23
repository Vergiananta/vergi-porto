import { Fragment } from "react";
import Profile from "../profile/Profile";
import './dashboard.css'
import { AiFillLinkedin, AiFillGithub, AiFillUpCircle } from "react-icons/ai"
import { Button } from "reactstrap";
import SkillProject from "../section2/SkillProject";

function Dashboard() {
    return (
        <Fragment>
            <div className="container-dashboard" >
                <div className="home-body" id="page1">
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div class="home__data">
                            <h1 class="home__title">Hi,<br></br>I'am <span class="home__title-color">Christian Vergiananta</span><br></br>Backend & Web Developer</h1>
                            <div className="home__social">
                                <a href="https://github.com/Vergiananta" class="home__social-icon"><AiFillGithub /></a>
                                <a href="https://www.linkedin.com/in/christian-vergiananta-tamonsang-68133417a/" class="home__social-icon"><AiFillLinkedin /></a>
                            </div>
                            <Button className="button" href="#page2" onClick="location.href=#page2" ><span>About me</span></Button>
                        </div>
                        <div >
                            <Profile />
                        </div>
                    </div>
                </div>
                <div className="home-page2" id="page2">
                    <SkillProject />
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard;