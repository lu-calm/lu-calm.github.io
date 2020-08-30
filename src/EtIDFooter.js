import React from 'react';

import { Container, Jumbotron, NavLink } from 'react-bootstrap'

import SharingButtons from './socialshare.js';
import SiteSocial from './sitesocials.js';

const EtIDFooter= () => (

<Jumbotron fluid>
  <Container>
    <p>
    <pre>

  <span aria-label="Heart" role="img">&#128420;</span>{' '}Donation Address: 0xa28910bcbe9a1b9119940343c02cae65c1b22cc5 <small><NavLink to="https://etherscan.io/address/0xa28910bcbe9a1b9119940343c02cae65c1b22cc5">View on Etherscan</NavLink></small>
  </pre>
 </p>

 <p>
<SiteSocial />
 </p>
    <p>
<SharingButtons />
    </p>
    
  </Container>
</Jumbotron>

  );

export default EtIDFooter;
