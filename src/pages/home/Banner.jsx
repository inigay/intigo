import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Banner extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="content-border banner-wrapper">
                    <div className="banner-content">
                        <h1>Intigo Development Company</h1>
                        <p>
                            Since our founding in 2000, we have helped hundreds of clients to
                            design, develop, host, and market all kinds of Internet apps, including:
                            Websites · E-commerce · Social Networks · Mobile Apps
                            Online Databases · Reporting Systems · Business Software · And More
                        </p>
                        <div className="banner-action-area">
                            <RaisedButton label="Find Out More" primary={true} />
                            <RaisedButton label="Contact Us" secondary={true} />
                        </div>
                    </div>
                    <div>
                        <img src="/img/banner.jpg" alt=""/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Banner;