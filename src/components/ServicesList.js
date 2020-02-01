import React, {Component} from 'react';
import ItemList from './ItemList';
import Cart from './Cart';

export default class ServicesList extends Component {
    render() {
        return (
            <div>
                <Cart>
                </Cart>
                <ItemList>
                </ItemList>
            </div>
        )
    }
}