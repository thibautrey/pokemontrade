import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleNav from '../common/SimpleNav';
import routeConfig from '../../common/routeConfig';

/*
This is the root component of your app. Here you define the overall layout
and the container of the react router. The default one is a two columns layout.
You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    static defaultProps = {
        children: 'No content.',
    };

    render() {
        return (
            <div className="home-app container-fluid">
                <center style={{padding: "10px", color: "rgb(255,203,6)"}} className="websiteTitle">Pokemon Trade</center>
                <div className="page-container row-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
/*
<center><SimpleNav routes={routeConfig} /></center>
*/
