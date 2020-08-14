import React, { Component } from "react";
import { Container, Card, Accordion } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';


class Support extends Component {
  render() {
    return (
      <Container>
        <h2>Support Eth-ter-I-Die</h2>
        <Accordion>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Donation
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
          <p class="text-center">
          If you are happy with this service and want to support future features a donation would be greatly appreciated
          {'  '} <span aria-label="Beaming Smiley Face" role="img">&#128522;</span>

  </p>
<p class="text-center">
          Donation Address:
          </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>



        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        Development
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
        <p class="text-center">
Bear with me, I am very much new to the world of coding!
  </p>
  <p class="text-center">
  You can witness my struggles on my youtube channel. Feel free to comment if you have any tips or advice, any help is greatly appreciated!
  </p>
<p class="text-center">
  <SocialIcon url="https://www.youtube.com/channel/UC9GTIw90lZei5mUfjmTf7fg" bgColor="#000000"/>

  </p>
<p class="text-center">
If you would like to help improve the shambles of code I have written, here is the GitHub account!
</p>
<p class="text-center">
<SocialIcon url="https://github.com/lu-calm/eth-ter-i-die" bgColor="#000000"/>

        </p>
          </Card.Body>
        </Accordion.Collapse>
        </Card>


        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
        Feedback and Suggestions (including new DApp requests)
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
        <p class="text-center">
        If you have some feedback or suggestions for Eth-ter-I-Die, please contact me via twitter.
        </p>
        <p class="text-center">
        Also let me know, via twitter, if you have any requests for new DApps or services to be added to Eth-ter-I-Die. I will try my best to add them ASAP!
      </p>

      <p class="text-center">
      <SocialIcon url="https://twitter.com/lu_calm" bgColor="#000000"/>
              </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>
</Container>








    );
  }
}

export default Support;
