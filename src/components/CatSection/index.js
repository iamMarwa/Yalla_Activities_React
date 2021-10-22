import React from 'react'
import Button from 'react-bootstrap/Button'
import {CatContainer, CatWrapper,CatRow,Column1,TextWrapper,TopLine,Heading,Subtitle} from './CatElements'
const CatSection = ({lightBg, id, imgStart, topLine, lightText, darkText,headLine,description}) => {
    return (
        <>
        <CatContainer lightBg={lightBg} id={id}>
            <CatWrapper>
                <CatRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}><Button variant="light">HTML5</Button>
                        <Button variant="light">CSS3</Button>
                        <Button variant="light">JavaScript</Button>
                        <Button variant="light">React</Button>
                        <Button variant="light">Node JS</Button>

                        </Heading>
                        <Subtitle darkText={darkText}><Button variant="light">PHP</Button>
                        <Button variant="light">Laravel</Button>
                        <Button variant="light">Python</Button>
                        <Button variant="light">Dart</Button>
                        <Button variant="light">Flutter</Button>
                        </Subtitle>
                        
                         </TextWrapper>
                    </Column1>
                </CatRow>
            </CatWrapper>

        </CatContainer>
            
        </>
    )
}

export default CatSection;
