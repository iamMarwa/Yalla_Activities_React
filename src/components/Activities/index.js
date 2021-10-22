import React from 'react'
import Icon1 from '../../images/svg-4.svg';
import  Icon2 from '../../images/svg-5.svg';
import Icon3  from '../../images/svg-6.svg';
import {ActivitiesContainer,ActivitiesH1, ActivitiesWrapper,ActivitiesCard,ActivitiesIcon,ActivitiesH2,ActivitiesP} from './ActivityElements'
const Activities = () => {
    return (
        <ActivitiesContainer id="activities">
            <ActivitiesH1>Activities</ActivitiesH1>
            <ActivitiesWrapper>
                <ActivitiesCard>
                    <ActivitiesIcon src={Icon1}/>
                    <ActivitiesH2>Front-end Web Development</ActivitiesH2>
                    <ActivitiesP></ActivitiesP>
                </ActivitiesCard>
                <ActivitiesCard>
                    <ActivitiesIcon src={Icon2}/>
                    <ActivitiesH2>Back-end Web Development</ActivitiesH2>
                    <ActivitiesP></ActivitiesP>
                </ActivitiesCard>
                <ActivitiesCard>
                    <ActivitiesIcon src={Icon3}/>
                    <ActivitiesH2>Mobile Development</ActivitiesH2>
                    <ActivitiesP></ActivitiesP>
                </ActivitiesCard>
            </ActivitiesWrapper>
        </ActivitiesContainer>
    )
}

export default Activities;
