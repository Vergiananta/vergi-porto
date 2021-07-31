import { Fragment } from "react";
import Profile from "../profile/Profile";
import './dashboard.css'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { Button, Col, Row } from "reactstrap";
import SkillProject from "../section2/SkillProject";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import bg1 from "../../assert/background/background2.jpg";

function Dashboard() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <Fragment>
            <div className="container-dashboard" >
                <Parallax bgImage={bg1} blur={{ min: -2, max: 2 }}>
                    <div className="home-body" style={{ height: '800px' }}>
                        <Row>
                            <Col className="home__data" sm={{ size: 6, order: 2, offset: 2 }}>
                                <h1 data-aos="flip-down" class="home__title">Hi,<br></br>I'am <span class="home__title-color">Christian Vergiananta</span><br></br>Backend & Web Developer</h1>
                                <div className="home__social">
                                    <a href="https://github.com/Vergiananta" class="home__social-icon"><AiFillGithub /></a>
                                    <a href="https://www.linkedin.com/in/christian-vergiananta-tamonsang-68133417a/" class="home__social-icon"><AiFillLinkedin /></a>
                                </div>
                                <Button className="button" href="/dashboard/skill" ><span>My Skills</span></Button>
                            </Col>
                            <Col sm={{ size: 3, order: 1, offset: 1 }}>
                                <Profile />
                            </Col>
                        </Row>
                    </div>
                </Parallax>
                <div className="home-page2" id="page2">
                    <SkillProject />
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard;