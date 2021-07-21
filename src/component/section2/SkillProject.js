import { Fragment } from 'react';
import './skillproject.css'
import skill from '../../assert/icon/skillLogo.png'
import project from '../../assert/icon/project.png'
import { Button } from 'reactstrap';
import { AiFillUpCircle } from "react-icons/ai";

function SkillProject() {

    const handleClick = () => {

    }

    return (
        <Fragment>
            <div class="header">
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button href="#page1" onClick="location.href='#page1'" color="transparent" >
                        <AiFillUpCircle size={50} color='#f5f5f5' className='btn-skill' />
                    </Button>
                </div>
                <div class="inner-header flex" style={{ justifyContent: 'space-around' }}>

                    <img src={skill} width="10%" height="auto" className="image-skill" />

                    <img src={project} width="10%" height="auto" className="image-project"/>
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