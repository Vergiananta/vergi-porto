import { Component } from "react";
import { Col, Row } from "reactstrap";
import './biography.css'
import line from '../../assert/line/line.png';
import data from "./data";

function Biography() {

    return (
        <div style={{overflowX: 'scroll'}}>

            {data.map((datas, i) => {
                return (
                    <div className="content" key={i} style={{ height: '700px'}}>
                        <div >
                            <p>{datas.year}</p>
                        </div>
                        <div >
                            <img src={datas.line} style={{ height: "500px", backgroundRepeat: "repeat-y", width: "300px" }} />
                        </div>
                        <div>
                            <p>{datas.description}</p>
                        </div>
                    </div>
                )
            })}

        </div>

    )

}

export default Biography;