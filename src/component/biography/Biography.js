import { Col, Container, Row } from "reactstrap";
import './biography.css'
import line from '../../assert/line/line.png';
import { data, data2 } from "./data";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Biography() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    console.log(offsetY);
    useEffect(() => {
       
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        Aos.init({duration: 2000});
    })
    return (
        <div className="container-bg" >
            <div style={{width: '100%', justifyContent: 'center', textAlign: 'center', color: 'white', paddingTop: '100px'}}>
                <h1 style={{fontWeight: 'bold', fontFamily: 'Comic Sans'}} data-aos='zoom-in'>BIOGRAPHY</h1>
            </div>
            <Container>
            <Row xs="3">
                <Col sm="5">
                    {data.map((datas, i) => {
                        return (
                            <div className="contents" key={i} style={{ transform: `translateY(${offsetY * 0.5}px)` }} >
                                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                    <p className="date_text" data-aos='fade-right'>{datas.year}</p>
                                </div>
                            </div>
                        )
                    })}
                    {data2.map((datas, i) => {
                        return (
                            <div className="content_2" key={i} style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
                                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                    <p className="date_text" data-aos='fade-right'>{datas.year}</p>
                                </div>
                            </div>
                        )
                    })}
                </Col>
                <Col sm="2">

                    <img src={line} style={{ height: "2500px", width: "300px", marginTop: "50px", justifyContent: 'center' }} alt="Biography"/>

                </Col>
                <Col>
                    {data.map((datas, i) => {
                        return (
                            <div key={i} className="content_decription" style={{ transform: `translateY(${offsetY * 0.2}px)` }} >
                                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                    <p className="date_description_title"  data-aos="fade-left">{datas.title}</p>
                                    <p className="date_description_company" data-aos="fade-left">{datas.company}</p>
                                    <p className="date_description" data-aos="fade-left">{datas.description}</p>
                                </div>
                            </div>

                        )
                    })}
                    {data2.map((datas, i) => {
                        return (
                            <div key={i} className="content_decription_2" style={{ transform: `translateY(${offsetY * 0.05}px)` }}>
                                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                    <p className="date_description_title"  data-aos="fade-left">{datas.title}</p>
                                    <p className="date_description_company"  data-aos="fade-left">{datas.company}</p>
                                    <p className="date_description" data-aos="fade-left">{datas.description}</p>
                                </div>
                            </div>

                        )
                    })}
                </Col>
            </Row>
            </Container>
        </div>

    )

}

export default Biography;