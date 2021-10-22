import React from 'react'
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen}) => {
    return (
        <SidebarContainer isOpen = {isOpen}>
            <Icon >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" >About Us</SidebarLink>
                    <SidebarLink to="category" >Category</SidebarLink>
                    <SidebarLink to="activities" >Activities</SidebarLink>
                    <SidebarLink to="feedBack" >FeedBack</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        
        </SidebarContainer>
    )
}

export default Sidebar;
