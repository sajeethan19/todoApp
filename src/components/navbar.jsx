// import { useState } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Navbar (props){         //props => {loginCheck:functionInParent_App , isLoggedIn:Boolean}
    
    function logOut (){
        if (props.isLoggedIn === true){props.loginCheck();} //if it's already logged in it will log out
        
    }

    
    return(
        <header>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav col-12 text-center">
                        <Link className={`nav-link col-lg-6 ${props.isLoggedIn? "active" : "" }`} aria-current="page">ToDo</Link> {/*to property is removed because no need to route to todo without login*/}
                        <Link to="/todoApp" className={`nav-link col-lg-6 ${props.isLoggedIn? "" : "active" }`} onClick={logOut}>{props.isLoggedIn? "Log Out": "Log In"}</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
    
}

Navbar.propTypes = {
    isLoggedIn:PropTypes.bool,
    loginCheck:PropTypes.func,
};

export default Navbar;