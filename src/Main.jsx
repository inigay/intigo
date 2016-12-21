import React, {Component} from 'react';

import Navigation from './shared/Navigation';
import Home from './pages/home/Home';

class Main extends Component
{
    render()
    {
        return (
            <div>
                <Navigation />
                <Home />
            </div>
        );
    }
}

export default Main;