import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap, SocialLogo, WebsiteRights,SocialIcon, SocialIconLink} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            Yalla! Activities
                        </SocialLogo>
                        <WebsiteRights>Yalla! Activities © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcon>
                        <SocialIconLink href="www.twitter.com" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="mailto:info@yalla.com" target="_blank" aria-label="Email"><FaEnvelope/></SocialIconLink>

                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
