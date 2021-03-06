import React from 'react';

import { Button, Container, Card, Row, Col, Accordion } from 'react-bootstrap'

import { introAndEndData, remvoveIntroAndEndData } from './core.js';



const EtIDAdvSet= () => (

 <Container fluid>
 <Row>
 <Col>
   <Accordion>
     <Card>
         <Accordion.Toggle as={Card.Header} eventKey="0">
           Advanced Settings
         </Accordion.Toggle>

       <Accordion.Collapse eventKey="0">
         <Card.Body>
         <h4>Include/ Exclude Intro and End Sections</h4>
         <p>
         Chose below if you want to include or exclude the "Intro" and "End" text sections generated by Eth-ter-I-Die. Excluding this content is useful for those using Eth-ter-I-Die for multiple wallets.
         </p>

         <Row className="justify-content-md-center">
         <Col class="col-sm-offset-3 col-sm-2" >
        <Button variant="success" type="submit" onClick={() => { introAndEndData() }}>Include (Default)</Button>
         </Col>
         <Col class="col-sm-offset-1 col-sm-2" >
        <Button variant="danger" type="submit" onClick={() => { remvoveIntroAndEndData() }}>Exclude</Button>


        </Col>
</Row>

         </Card.Body>
       </Accordion.Collapse>
     </Card>
     </Accordion>
   </Col>

   </Row>
 </Container>
 );

 export default EtIDAdvSet;
