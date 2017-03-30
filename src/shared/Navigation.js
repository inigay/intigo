import React, {Component} from 'react';
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import AppBar from 'material-ui/AppBar';

class Navigation extends Component
{


    render()
    {
        return (
            <AppBar 
                style={{position:'fixed'}} 
                className="app-bar" 
                zDepth={1} title="Intigo" 
                iconElementLeft={
                    <Link to={'/'}>
                        <img 
                            src="/img/logo2.png" 
                            className="logo-image" 
                        />
                    </Link>
                }
                iconStyleRight={
                    {flexGrow: 1}
                }
                iconElementRight={
                    <Link to={'/'} style={{flexGrow: 1}}>
                        <List 
                            className="inline-nav"
                            style={{display:"flex", justifyContent: "flex-end"}}
                        >
                            <ListItem 
                                primaryText="Services" 
                                className="nav-sub-menu"
                                rightIcon={<NavigationArrowDropDown />}
                            >
                                <Menu
                                    className="sub-menu-item"
                                    
                                >
                                    <MenuItem primaryText="Web Development" />
                                    <MenuItem primaryText="Mobile App Development" />
                                    <MenuItem primaryText="Reporting" />
                                    <MenuItem primaryText="SEO Services" />
                                </Menu>
                            </ListItem>
                            <ListItem primaryText="About" />
                            <ListItem primaryText="Case Study" />
                            <ListItem primaryText="Contact" />
                        </List>
                    </Link>
                }
                >
            </AppBar>
        );
        
    }
}

export default Navigation;