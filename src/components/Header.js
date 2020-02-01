import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link to='/contacts'>
                    <img alt="contacts" src="img/bee/call.png" />
                </Link>
                <Link to='/'>
                    <hgroup className="title header__title">
                        <h1 className="title__main">Шалена<br /> Бджілка</h1>
                        <h4 className="title__content">організуємо свято для виших діток</h4>
                    </hgroup>
                </Link>
                <Link to='/basket'>
                    <img alt="basket" src="img/bee/basket-empty.png" />
                </Link>
            </header>
        )
    }
}