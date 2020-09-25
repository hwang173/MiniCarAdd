import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/dropdown.css';
import { Redirect } from 'react-router-dom'


export class DropdownList extends Component {

    state = {addCar: false}

    onAddCar = () => {
        this.setState({addCar: true})
    }

  
    render () {

        if (this.state.addCar === true) {
            return <Redirect to="/add-car" />
        }
            return (
            <React.Fragment>
                <Dropdown>
                    <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                        Add a vehicle
                    </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.onAddCar}>Car</Dropdown.Item>
                            <Dropdown.Item className='disabled'>Boat (available soon...)</Dropdown.Item>
                            <Dropdown.Item className='disabled'>Bike (available soon...)</Dropdown.Item>
                            <Dropdown.Item className='disabled'>Caravans (available soon...)</Dropdown.Item>
                        </Dropdown.Menu>

                </Dropdown>
            </React.Fragment>
        );
    }

}
