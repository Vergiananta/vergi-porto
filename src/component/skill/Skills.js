import React from 'react'
import './skill.css'
import { AiFillStar } from "react-icons/ai";
import { data } from './data';
import { useEffect } from 'react'
import Aos from 'aos'
import { Parallax } from 'react-parallax'

export default function Skill() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="container_skill">
      <div className="container_image">
        <Parallax className="title bg_title"  >
          <p className="text-title">SKILL</p>
        </Parallax>
        {data.map((skill, index) => {
          return (
            <div class="image" key={index} data-aos="zoom-in">
              <img class="image__img" src={skill.image} alt="Bricks" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">{skill.title}</div>
                <p class="image__description">
                  <AiFillStar color="yellow" /> {skill.rate}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
