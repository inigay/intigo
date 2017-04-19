import React, {Component} from 'react';

import Banner from './Banner';
import './Home.css';
import MobileSection from './MobileSection';
import WebSection from './WebSection';
import Heading from './Heading';

class Home extends Component
{
    render()
    {
        return (
            <div>
                <Banner />
                
                <MobileSection />
                <WebSection />
            </div>
        );
    }
}

export default Home;