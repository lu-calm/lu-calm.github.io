import React from 'react';

import { Container, Jumbotron } from 'react-bootstrap'

import SharingButtons from './socialshare.js';
import SiteSocial from './sitesocials.js';

const EtIDFooter= () => (

<Jumbotron fluid>
  <Container>
  <p>
  <span aria-label="Heart" role="img">&#128420;</span> {'  '}
 Donation address:
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
