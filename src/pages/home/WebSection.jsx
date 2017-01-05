import React, {Component} from 'react';

import './WebSection.css';

class WebSection extends Component {
    render() {
        return (
            <div className="web-section">
                <div className="content-border">
                   
                    <div>
                        <h1>Web Development</h1>
                        <p>
                            When searching for an e-commerce platform there are several for for an e-commerce platform there are severa an e-commerce platform there are severa options that are available.
                        </p>
                        <p>
                            When searching for an e experience with e-commerce platforms both <a href="">angular.com</a>  custom-built and third-party since our early years (learn more about our e-commerce expertise). This article focuses primarily on two major platforms rather than an overview of all platforms. <a href="">Learn More</a>
                        </p>
                    </div>
                     <div >
                        <img src="/img/web-section.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebSection;