import React, {Component} from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="content-border banner-wrapper">
                <div>
                    <h1>Intigo LLC is a SoCal software consultant and development company</h1>
                    <p>
                        Since our founding in 2000, we have helped hundreds of clients to
                        design, develop, host, and market all kinds of Internet apps, including:
                        Websites · E-commerce · Social Networks · Mobile Apps
                        Online Databases · Reporting Systems · Business Software · And More
                    </p>
                </div>
                <div>
                    <img src="/img/banner.jpg" alt=""/>
                </div>
            </div>
        );
    }
}

export default Banner;