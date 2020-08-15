
import React from 'react';

import { Container, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { getSelectedCheckboxValues} from './core.js';



const EtIDSelection= () => (
 <Container fluid >
 <Row className="justify-content-md-center">
   <Col>
       <h3 class="text-center">Blockchain Explorer</h3>
       <p class="text-center">
       Please select the Blockchain Explorer you wish you beneficiaries to use. It is recommended that you pick a Blockchain Explorer as it helps reiterate concepts described in the Intro text before moving Ether or Ethereum based assets.
       </p>
       </Col>
 </Row>

 <Row>


 <Col>
<div class="d-flex justify-content-center">
<ToggleButtonGroup type='checkbox' name='BlockChainExplorer' defaultValue={'/DappData/etherscan.txt'}>
<ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/etherscan.txt' >Etherscan</ToggleButton>
</ToggleButtonGroup>
</div>
     </Col>
   </Row>


     <br />
   <Row className="justify-content-md-center">
     <Col>
         <h3 class="text-center">On Ramp/ Off Ramp</h3>
         <p class="text-center">
Please select your chosen On-Ramp/ Off-Ramp for your beneficiaries to transfer your Ether and Ethereum based assets to their local currency.
         </p>
     </Col>
   </Row>


 <Row>
   <Col>
  <div class="d-flex justify-content-center">
  <ToggleButtonGroup type='checkbox' name='On Ramp/ Off Ramp'>
  <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/coinbase.txt' >Coinbase</ToggleButton>
  <ToggleButton variant="outline-dark" onChange={getSelectedCheckboxValues} value='/DappData/uphold.txt' disabled>Uphold</ToggleButton>

   </ToggleButtonGroup>
  </div>
       </Col>
     </Row>

       </Container>
);


export default EtIDSelection;
