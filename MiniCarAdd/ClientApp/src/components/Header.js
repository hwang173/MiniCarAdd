import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/header.css';

export class Header extends Component {

    render () {
        return (
            <header>
                <Navbar className='navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3' light>
                    <Container>
                        <NavbarBrand tag={Link} to='/'>Carsales</NavbarBrand>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
