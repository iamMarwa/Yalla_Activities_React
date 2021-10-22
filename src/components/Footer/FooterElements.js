import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
background: #101522;
`;

export const FooterWrap = styled.div`
padding: 18px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`;



export const SocialMedia = styled.section`
max-width: 1000px;
width:100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: row;
}
`;

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
diplay: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

`;

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
margin-left: 100px;
@media screen and (max-width: 820px){
    margin-left: 60px;

}
`;


export const SocialIcon =styled.div`
margin-bottom: 16px;
width: 240px;
margin-right: 0;
@media screen and (max-width: 820px){
    margin-left: 80px;
}
`;

export const SocialIconLink =styled.a`
color: #fff;
font-size: 24px;
`;


