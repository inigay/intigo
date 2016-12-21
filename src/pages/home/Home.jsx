import React, {Component} from 'react';

import Banner from './Banner';
import './Home.css';

class Home extends Component
{
    render()
    {
        return (
            <div className="home-wrapper">
                <Banner />
            </div>
        );
    }
}

export default Home;