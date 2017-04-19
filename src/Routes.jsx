import React, {Component} from 'react';


class Routes extends Component
{
    render(){

        return (
            <Router history={hashHistory}>
                <IndexRoute path="/" component={Home}  />
                <Route path="/about" component={About} />
            </Router>,
            document.getElementById('container-main')
        );

    }
}

export default Routes;