import React from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {
    Container,Row,Col,Card, CardBody, CardTitle,
    ListGroup, ListGroupItem, Button
} from 'reactstrap';

export default function Country() {
    const history = useHistory();
    const data = history.location.state;
    console.log("Data " ,data);

    function onSubmit(data){
        const apiKey="5756d1b5f395252a3dbccb5749770175";
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${data.capital}`)
        .then((responses) => {
            const capital = responses.data;
            console.log(capital);
            // const {capital, population, latlng, flag }= countryData;

            history.push({
                pathname: "/weather",
                state: capital
            })
    
        }).catch((error)=>{
            alert(error);
        })
    }
    return (
        <Container>

    
        <Row>
            <Col lg="3"></Col>
            <Col lg="6" >
        
        <div>

            {data?.map((item) => 
                <Card style={{backgroundColor:"silver" ,marginTop:"30px"}}>
                    <CardBody>
                        <CardTitle tag="h3">Country Detail</CardTitle>
                        <ListGroup>
                            <ListGroupItem>capital:- {item.capital} </ListGroupItem>
                            <ListGroupItem>population:- {item.population}</ListGroupItem>
                            <ListGroupItem>latlng:- {item.latlng}</ListGroupItem>
                            <ListGroupItem>flag:- <img src={item.flag} alt="flag Image" height="100" width="auto" style={{border:"1px solid silver"}}/></ListGroupItem>

                        </ListGroup>
                        <div className="mt-4 text-center">

                      <Button color="warning" onClick={()=>onSubmit(item)}> 
                      Capital Weather</Button>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
        </Col>
        <Col lg="3"></Col>
        </Row>
        </Container>
    )
}
