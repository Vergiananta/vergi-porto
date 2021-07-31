import { Fragment } from 'react';
import './skillproject.css'
import blueNomads from '../../assert/projects/blueNomads.jpg'
import phillipines from '../../assert/projects/phillipin.jpg'
import trenggalek from '../../assert/projects/Trenggalek3.gif';
import talent from '../../assert/projects/talent_enigma.png'
import { Col, Container, Row } from 'reactstrap';
import uht from '../../assert/projects/univhangtuah.jpg';
import { Parallax } from 'react-parallax';
import enigma from '../../assert/projects/enigma.jpeg'

function SkillProject() {

    return (
        <Fragment>
            <div class="header">
                <div class="inner-header">
                    <Container className="container_project">
                        <h1 style={{ marginTop: '5rem', marginBottom: '5rem' }}>PROJECT</h1>
                        <Col className="my-5">
                            <Row>
                                <Col>
                                    <Parallax bgImage={phillipines} strength={15}><div style={{ height: '20rem' }} /></Parallax>

                                </Col>
                                <Col>
                                    <img src={blueNomads} width="20%" alt="bluenomads" />
                                    <p style={{ color: 'white', textAlign: 'left', fontSize: '2vw', marginTop: '30px' }}>BlueNomads Philippines <br></br> <span>August 2017</span></p>
                                    <p style={{ color: 'white', textAlign: 'left', fontSize: '1vw' }}>Description: <br></br>Help partner to Analyze and Visualization ocean current data in Visayan Sea, Philippines</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="my-5">
                            <Row>
                                <Col><img src={uht} width="20%" style={{ float: 'right' }} alt="uht" />
                                    <div style={{ clear: 'right' }}>
                                        <p style={{ color: 'white', textAlign: 'right', fontSize: '2vw', marginTop: '30px' }}>Universitas Hang Tuah <br></br> <span>September 2017-January 2018</span></p>
                                        <p style={{ color: 'white', textAlign: 'right', fontSize: '1vw' }}>Description: <br></br>Visualization and Simulate Tsunami wave at Trenggalek, East Java for Bachelor thesis</p>
                                    </div>
                                </Col>
                                <Col>
                                    <img src={trenggalek} alt="trenggalek" />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="my-5">
                            <Row>
                                <Col>
                                    <img src={talent} style={{ height: '55%' }} alt="talent"/>

                                </Col>
                                <Col>
                                    <img src={enigma} width="50%" alt="enigma"/>
                                    <p style={{ color: 'white', textAlign: 'left', fontSize: '2vw', marginTop: '30px' }}>PT. Enigma Cipta Humanika <br></br> <span>June 2021-July 2021</span></p>
                                    <p style={{ color: 'white', textAlign: 'left', fontSize: '1vw' }}>Description: <br></br>Develop Backend of Talent showcase Enigmacamp </p>
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                </div>

                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g class="parallax">
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
        </Fragment>
    )
}

export default SkillProject;