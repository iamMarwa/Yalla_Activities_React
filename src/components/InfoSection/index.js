import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { purple, red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

import {InfoContainer, InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap, Column2, ImgWrap, Img} from './InfoElements'
  
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText,headLine,description, buttonLabel, img, alt, primary, dark2, dark}) => {

    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }

        title="Ahmed Ibrahim"
        subheader={  <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
    }
        />

      <CardMedia
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          It was an impressive experience for me. The website and the booking is easy and clear.
          I really liked it.
        </Typography>
      </CardContent>
    </Card><br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
            A
          </Avatar>
        }

        title="Sara Sami"
        subheader={  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
    }
        />

      <CardMedia
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The website and the booking is easy and clear.
          I liked it.
        </Typography>
      </CardContent>
    </Card>

                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>

        </InfoContainer>
            
        </>
    )
}

export default InfoSection;
