import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../css/add-car.css';
import Car from './Car'


export class AddCar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            make: '',
            model: '',
            num_of_doors: '',
            num_of_wheels: '',
            engine: '',
            body_type: '',
            error: false,
            completed: false,
            cars: []
        };

        this.getAllCars();

    }


    success() {
        this.clearState();
        this.setState({ completed: true })
    }

    failure() {
        this.setState({
            error: true,
            completed: false
        })
    }

    clearState() {
        this.setState({
            make: '',
            model: '',
            num_of_doors: '',
            num_of_wheels: '',
            engine: '',
            body_type: '',
            error: false,
            completed: false
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = 'api/vehicle/create-car';
        const data = {
            Make: this.state.make,
            Model: this.state.model,
            NumOfDoors: this.state.num_of_doors,
            NumOfWheels: this.state.num_of_wheels,
            Engine: this.state.engine,
            BodyType: this.state.body_type,
            Type: 'car'
        }

        fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => {
            const status = response.status;
            if (status === 200) {
                this.success();
                this.getAllCars();
            } 
            else this.failure();
        });

       
    }

    getAllCars = () =>{
        const url = 'api/vehicle/car';

        fetch(url, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            return response.json()
        })
        .then((data) => {
            this.setState({ cars: data });
            
        })
        .catch((err) => {

        });
    }


    
    
    render() {
        const { make, model, num_of_doors, num_of_wheels, engine,
            body_type, error, completed } = this.state;

        return (
            <div>
                <h3  className='header-style'>Add a Car</h3>
                {error &&
                    <p className="error">System Error!</p>
                }
                {completed &&
                    <p className="success">Car has been added</p>
                }

                <Form className='display-grid' onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId='formGridMake'>
                            <Form.Label>Make</Form.Label>
                            <Form.Control
                                required
                                value={make}
                                placeholder='Make'
                                onChange={(e) => this.setState({ make: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formGridModel'>
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                required
                                value={model}
                                onChange={(e) => this.setState({ model: e.target.value })}
                                placeholder='Model'
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId='formGridEngine'>
                            <Form.Label>Engine</Form.Label>
                            <Form.Control
                                required
                                placeholder='Engine'
                                value={engine}
                                onChange={(e) => this.setState({ engine: e.target.value })}
                            />
                        </Form.Group>


                        <Form.Group as={Col} controlId='formGridBodyType'>
                            <Form.Label>Body type</Form.Label>
                            <Form.Control
                                required
                                placeholder='Body type'
                                value={body_type}
                                onChange={(e) => this.setState({ body_type: e.target.value })}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId='formGridNumDoors'>
                            <Form.Label>Number of doors</Form.Label>
                            <Form.Control
                                required
                                type='number'
                                min='1'
                                max='10'
                                placeholder='Number of doors'
                                value={num_of_doors}
                                onChange={(e) => this.setState({ num_of_doors: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formGridNumWheels'>
                            <Form.Label>Number of wheels</Form.Label>
                            <Form.Control
                                required
                                type='number'
                                min='1'
                                max='10'
                                placeholder='Number of wheels'
                                value={num_of_wheels}
                                onChange={(e) => this.setState({ num_of_wheels: e.target.value })}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button
                        variant='success'
                        type="submit"
                        className='button-style'
                    >
                        Add
                    </Button>

                </Form>
                <Car cars={this.state.cars} />
            </div>
        );
    }

}
