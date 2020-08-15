import React, { Component } from "react";
import { Container, Card, Accordion } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import PersonalSocial from './personalsocials.js';

class About extends Component {
  render() {
    return (
      <Container>
        <h4>What's this all about then?</h4>
        <Accordion>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Latest News and Updates
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
          <p>
          <dl>
          <dt>
          News and Updates: 14/08/2020
          </dt>
          <dd>
          Alpha version released
          </dd>
          </dl></p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Story Time
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
            <p class="text-break">
            Well done.
            </p>
            <p class="text-break">
            You have started accumulating Ethereum and Ethereum based tokens. You have great foresight, however, not enough to see the Number 42 bus when you cross the road tomorrow morning at 8:14am.
            </p>
            <p class="text-break">You have ceased to be, bereft of life, you rest in peace, you have kicked the bucket, hopped the twig, bit the dust, snuffed it, breathed your last, and gone to meet the Great Head of Blockchain Technologies in the sky.</p>
            <p class="text-break">So, what is going to happen to your Ethereum assets now?</p>
            <p class="text-break">Your hardware wallet is passed over as a malfunctioning USB and recycled as e-waste.</p>
            <p class="text-break">Your wallet seed phrase, kept on a crumpled note, is overlooked as nonsense and recycled.</p>
            <p class="text-break">Who’s going to benefit from all the time and money you’ve invested in Ethereum; all that learning, developing and acquiring?  Currently the refuge collector is the odds-on favourite but likely the worth you have created will be lost forever. It will be your anonymous blockchain memorial to what might have been.</p>
            <p class="text-break">This does not have to be the case.</p>
            <h4> I present to you Eth-ter-I-Die!</h4>

            </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Assumptions, Advice and Tips
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              <p class="text-break">
              - The generated template will inform your loved ones on how to transfer your Ethereum assets to Ether first and then to fiat. This is in order to reduced complexity and minimise confusion.
              </p>
              <p class="text-break">
              - The content has been kept as concise as possible for the instructions to be followed as safely as possible. Some principles of Ethereum have been omitted for the purposed of reducing complexity. If you have suggestions of content improvements, please use the links in the footer to contact me.
              </p>
              <p class="text-break">
              - It is assumed you have enough Ether/ Gwei in your account  to cover the transaction fees.

              </p>
              <p class="text-break">
              - Content for all the selections can be found in <NavLink to="/textfiles">The Files section</NavLink>.
              </p>
              <p class="text-break">
- Please make your handwriting as easy to read as possible.
</p>
<p class="text-break">
- Additional wallets can be accommodated by re-doing the form for each wallet. You can remove the Intro and Outro text by clicking on advanced settings and clicking the “Exclude” button. Or you can edit the .txt file to accommodate for additional wallet instructions.
</p>
<p class="text-break">
- If possible, go through the document and process with your loved ones before you perish with a test wallet.
</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Who Created This?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
              <p>
              I did! Hello! My name is Lü Calm  {'  '}
              <span aria-label="Beaming Smiley Face" role="img">&#128522;</span>

                </p>
                <p>
              I am attempting to learn to code/ develop DApps on the Ethereum blockchain.
              </p>
              <p>
              Eth-ter-I-Die is my first attempt at coding and now has become a passion project for me.
              </p>
              <p>
              I use Eth-tet-I-Die myself and am seeing first hand how complicated it is for the less technologically minded. We need to make it easier for our loved ones to understand this technology so they can benefit when we die.
              </p>
              <p>
              You can see the painstaking process to get to this stage via my Eth-ter-I-Die Development youtube playlist below.
              </p>
              <p class="text-center">
              <SocialIcon url="https://www.youtube.com/playlist?list=PLW-TtH0Ie84bBTkv1cVVI0L_7kLRZ-UmY" bgColor="#000000"/>


              </p>


              <p>
              Here are my social links to learn more about updates to Eth-ter-I-Die, upcoming projects and contact me.
              </p>
                <PersonalSocial />



              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Feature Roadmap
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
            <p>Eth-ter-I-Die is constantly under development if you want to help out head to THE GIHUB LINK </p>

            <p>
            Here are some planned feature to Eth-ter-I-Die for the short and long term
            </p>

            <p>
            <dl>
  <dt>Short Term</dt>
  <dd>
  - Add Ledger Hardware Wallet instructions (just saving up for one...)
  </dd>
  <dd>
- Add MakerDao DApp instructions
  </dd>
  <dd>
- Add OpenSea DApp instructions
  </dd>
  <dd>
- Add more DApp and Service instructions (suggest via Twitter)
  </dd>
  <dt>Long Term</dt>
  <dd>- Make decentralised (currently hosted on GitHub Pages...)</dd>
  <dd>
- Add Language Support
  </dd>
  <dd>
- Add "Create Dapp Instructions submission" form
  </dd>
  </dl>
            </p>

              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Archived News
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
            <p>
            <dl>
            <dt>
            News and Updates: 13/08/2020
            </dt>
            <dd>
            There is no previous news or updates...
            </dd>
            </dl></p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>




        </Accordion>



        </Container>

    );
  }
}

export default About;
