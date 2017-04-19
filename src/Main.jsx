import React, {Component} from 'react';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';


class Main extends Component
{
    constructor(props)
    {

        super(props)
    }

    render()
    {
        return (
            <div id="container-main">
                
                <Navigation />
                <div id="main">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;