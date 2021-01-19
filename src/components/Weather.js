import React from 'react'
import { useHistory , Link} from "react-router-dom";
import {
    Container, Row, Col, Card, CardBody, CardTitle,
    ListGroup, ListGroupItem, Button
} from 'reactstrap';

export default function Weather() {
    const history = useHistory();
    const data = history.location.state;
    const getDetails=data.current;
    console.log("Capital " ,data.current);
    return (
        <Container>


            <Row>
                <Col lg="3"></Col>
                <Col lg="6" style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"} }>

                    <div>


                        <Card color="danger"> 
                            <CardBody>
                                <CardTitle tag="h3" className="text-white text-center">Capital Weather Detail</CardTitle>
                                <ListGroup>
                                    <ListGroupItem>temperature:- {getDetails.temperature}</ListGroupItem>
                                    <ListGroupItem>weather_icons:- <img src={getDetails.weather_icons} alt="flag Image" height="100" width="auto"/> </ListGroupItem>
                                    <ListGroupItem>wind_speed:- {getDetails.wind_speed}</ListGroupItem>
                                    <ListGroupItem>precip:- {getDetails.precip}</ListGroupItem>

                                </ListGroup>
                                  <div className="text-center mt-4">
                                     <Link to="/"><Button color="info">&larr; Go To Home</Button></Link>
                                  </div>
                            </CardBody>
                        </Card>

                    </div>
                </Col>
                <Col lg="3"></Col>
            </Row>
        </Container>
    )
}
