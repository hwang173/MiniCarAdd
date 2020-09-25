import React, { Component } from 'react';
import { Route } from 'react-router';
import { HomePage } from './components/HomePage';
import { DropdownList } from './components/DropdownList';
import './custom.css'
import { AddCar } from './components/AddCar';

export default class App extends Component {

    render() {
        return (
            <HomePage>
                <Route exact path='/' component={DropdownList} />
                <Route exact path='/add-car' component={AddCar} />
            </HomePage>
        );
    }
}