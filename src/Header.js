import React, { Component } from 'react';

export default class Header extends Component {
    render() {

        return (
            <div className="header-body">
                <div className="welcome-message">Welcome {this.props.user ? this.props.user : 'user'}</div> 
            </div>
        )
    }
}