import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox =({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4'/>
        </Link>
    </div>
)
const renderContant ={
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 '> Hi, I am <span className="font-semibold">Sanket </span>🙏  
        <br />
        A Devloper from India
        </h1>
    ),
    2: (
        <InfoBox
        text="Worked with many companies and picked up many skills along the way"
        link="/about"
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
        text="Led multiple projects to success over the years. Curious about the impac?"
        link="/projects"
        btnText="Visit my protfolio"
        />
    ),
    4: (
        <InfoBox
        text="Need a project done or looking for a dev? I`m just a few keywordstrokes away"
        link="/contact"
        btnText="Let`s talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
        
  return renderContant[currentStage] || null ;
}

export default HomeInfo
