import React, {Component} from 'react';

import './MobileSection.css';

class MobileSection extends Component {
    render() {
        return (
            <div className="mobile-section">
                <div className="content-border">
                    <div style={{paddingRight: '40px'}}>
                        <img src="/img/mobile-section2.png" alt=""/>
                    </div>
                    <div>
                        <h1>Mobile Application Development</h1>
                        <p>
                            When searching for an e-commerce platform there are several options that are available. experts we’ve had experience with e-commerce platforms both <a href="">xamarin.com</a>  custom-built and third-party since our early years (learn more about our e-commerce expertise). This article focuses primarily on two major platforms rather than an overview of all platforms. <a href="">Learn More</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileSection;