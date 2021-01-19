import React, { Fragment, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody ,CardTitle} from 'reactstrap';

export default function Home() {
    const history = useHistory();
    const [countryName, setCountry] = useState("");

    function callButton(countryName) {

        axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then((responses) => {
                const countryData = responses.data;
                console.log(countryData);
                // const {capital, population, latlng, flag }= countryData;

                history.push({
                    pathname: "/country",
                    state: countryData
                })

            }).catch((error)=>{
                alert(error);
            })
    }
    function onSubmit() {
        callButton(countryName);
    }
    return (

        <Container>
            <Row>
                <Col lg="3"></Col>
                <Col lg="6" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
                    <Card className="p-1" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                            <CardTitle tag="h3" className="text-white text-center">Enter country </CardTitle>
                            <Form>
                                <FormGroup>
                                    <Input type="text" placeholder="Enter country " value={countryName} onChange={(e) => setCountry(e.target.value)} />
                                    <div className="mt-4 text-center">

                                        <Button color="success" onClick={onSubmit}>Submit</Button>
                                    </div>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3"></Col>
            </Row>
        </Container>

    )
}
