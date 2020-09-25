import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Car = (props) => {
    const cars = props.cars.map((car) => {
        return (
            <Container key={car.id}>
                <Row>
                    <Col xs={2}>Make : {car.make}</Col>
                    <Col xs={2}>Model : {car.model}</Col>
                    <Col xs={2}>NumOfDoors : {car.numOfDoors}</Col>
                    <Col xs={2}>NumOfWheels : {car.numOfWheels}</Col>
                    <Col xs={2}>Engine : {car.engine}</Col>
                    <Col xs={2}>BodyType : {car.bodyType}</Col>
                </Row>
            </Container>
        ); 
    });

    return <div className="car-panel">{cars}</div>;
};

export default Car;
