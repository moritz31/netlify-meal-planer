import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <img src="logo.png" width="52" height="37" className="d-inline-block align-top" alt=""/>
            Essensplaner
            </a>
        </nav>
    )
}

export default NavBar;