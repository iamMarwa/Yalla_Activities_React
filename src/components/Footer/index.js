import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap, SocialLogo, WebsiteRights,SocialIcon, SocialIconLink} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            Marwa
                        </SocialLogo>
                        <WebsiteRights>Marwa © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcon>
                        <SocialIconLink href="https://www.linkedin.com/in/marwa-alnahdi/" target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                            <SocialIconLink href="https://github.com/iamMarwa" target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                            <SocialIconLink href="mailto:marwalnahdi@icloud.com" target="_blank" aria-label="Email"><FaEnvelope/></SocialIconLink>

                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
