import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import {HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="about">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi! I am Marwa</HeroH1>
                <HeroP>A Developer who creates web applications and mobile applications.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="projects" smooth={true} duration={500} spy={true} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Check My Work{hover? <ArrowForward /> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;
