import React from 'react';
import Login from '../comps/Login';
import '../css-pages/login.css';

export default class loginP extends React.Component {
    render() {
        return (
            <div name="loginP">
                <Login />
            </div>
        ); 
    }
}