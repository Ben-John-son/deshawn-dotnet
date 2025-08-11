import React from "react";
import { Card, Dropdown, DropdownItem, Button } from "react-bootstrap";


export default function WalkerCard({ walkerObj }) {
  return (
    <Card key={walkerObj.id} className="walkerCard">
              <Card.Img variant="top" src={walkerObj.picture} />
              <Card.Body>
                 <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       {walkerObj.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header>Dogs</Dropdown.Header>
        <Dropdown.Item>name</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text> */}
                <Button id="removeBTN" variant="primary">Add Dog</Button>
                <Button id="removeBTN" variant="primary">Remove</Button>
              </Card.Body>
            </Card>
  )
}
