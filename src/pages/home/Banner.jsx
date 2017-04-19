import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Banner extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="content-border banner-wrapper">
                    <div className="banner-content">
                        <h1>Innovative Support</h1>
                        <p>
                            Intigo LLC is a custom web & mobile application development company. Using cutting edge technology we 
                            help businesses streamline and perfect their products and services, and create better environment for 
                            them to grow locally and nationwide.
                        </p>
                        <p>
                            Technological advances nowadays are a crucial factor in a business world where customer reach, information gathering,
                            tracking and internal workflow become something that puts you ahead of the game with your competitors. Our main goal is
                            to analyze and find elements that can help you with your endevours, employ technology to attain them, and ultimately help 
                            you achieve your goals.
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