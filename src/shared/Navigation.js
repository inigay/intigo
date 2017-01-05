import React, {Component} from 'react';
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';

class Navigation extends Component
{


    render()
    {
        return (
            <AppBar style={{position:'fixed'}} className="app-bar" zDepth={0} title="Intigo" iconElementLeft={<Link to={'/'}><img src="/img/logo2.png" className="logo-image" /></Link>}>
            </AppBar>
        );
        
    }
}

export default Navigation;