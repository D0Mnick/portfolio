import React from 'react'
import "./TechnologiesStyle.css"
import { SiTailwindcss, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPhp, SiBootstrap, SiMysql } from 'react-icons/si';
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';

import { DiGit } from 'react-icons/di';


const Technologies = () => {
  return (
    
    <div className='head'>
      <div className='skill'>
      <h1>Skills</h1>
      <p>These are the Technologies l've worked with.</p>
      </div>
      <div className='technology'>

      <div className='tech'>
      <SiTailwindcss style={{color:"blue"}}  className='techh'/>
      <p>Tailwindcss</p>
      </div>

      <div className='tech'>
      <SiMongodb style={{color:"green"}}  className='techh'/>
      <p>Mongodb</p>
      </div>

      <div className='tech'>
      <SiExpress style={{color:"green"}}  className='techh'/>
      <p>Express Js</p>
      </div>

      <div className='tech'>
      <SiReact style={{color:"blue"}}  className='techh'/>
      <p>React Js</p>
      </div>

      <div className='tech'>
      <SiNodedotjs style={{color:"green"}}   className='techh'/>
      <p>Node Js</p>
      </div>

      <div className='tech'>
      <SiBootstrap style={{color:"blue"}}  className='techh'/>
      <p>Boostrap 5</p>
      </div>

      <div className='tech'>
      <FaHtml5 style={{color:"red"}}  className='techh'/>
      <p>HTML 5</p>
      </div>

      <div className='tech'>
      <FaCss3 style={{color:"blue"}}  className='techh'/>
      <p>CSS 3</p>
      </div>

      <div className='tech'>
      <TbBrandJavascript style={{color:"yellow"}}  className='techh'/>
      <p>Javascript</p>
      </div>
       
      <div className='tech'>
      < DiGit style={{color:"orange"}}  className='techh'/>
      <p>Git</p>
      </div>
      </div>
    </div>
  )
}

export default Technologies

