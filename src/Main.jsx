import React, {Component} from 'react';

import Navigation from './shared/Navigation';
import Home from './pages/home/Home';
import Footer from './shared/Footer';

class Main extends Component
{
    render()
    {
        return (
            <div>
                <Navigation />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default Main;