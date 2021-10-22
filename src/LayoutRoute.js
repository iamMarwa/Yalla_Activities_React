import React from 'react';
import { Route } from 'react-router-dom'; 
import NavBar from './components/Navbar/index';
import Footer from './components/Footer'

function LayoutRoute(props) {
    return (
        <React.Fragment>
            <NavBar 
                main={{label:"Yalla! Activities", path: "/"}} 
                link1={{label:"Category", path: "/category"}} 
                link2={{label: "Activities", path: "/activities"}} 
                link3={{label: "About", path: "/about"}}
                signUp={{label: "Register", path: "/signin"}}
            ></NavBar>
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer/>
        </React.Fragment>
    )
}

export default LayoutRoute;