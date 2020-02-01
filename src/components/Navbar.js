import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to='/'>
                    <i className="fas fa-home" />
                    <p>Головна</p>
                </Link>
                <Link to='/services'>
                    <i className="fas fa-server" />
                    <p>Послуги</p>
                </Link>
                <Link to='/contacts'>
                    <i className="fas fa-phone-square-alt" />
                    <p>Контакти</p>
                </Link>
            </nav>
        )
    }
}