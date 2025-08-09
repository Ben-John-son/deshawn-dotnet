import { useEffect, useState } from "react";
import { getWalkers } from "./apiManager";
import { Card, Button, Dropdown } from "react-bootstrap"; // Make sure react-bootstrap is installed

export default function Walkers() {
  const [walkers, setWalkers] = useState([]);

  useEffect(() => {
    getWalkers()
      .then(setWalkers)
      .catch((error) => {
        console.error("Failed to fetch walkers:", error);
      });
  }, []);

  return (
    <><div className="addWalkerBTN">
      <Button>Add Walker</Button>
    </div><div id="walkerCards" className="d-flex flex-wrap gap-3 p-3">
        {walkers.length > 0 ? (
          walkers.map((walker) => (
            <Card key={walker.id} className="walkerCard">
              <Card.Img variant="top" src={walker.picture} />
              <Card.Body>
                 <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       {walker.name}
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
          ))
        ) : (
          <p>No walkers available</p>
        )}
      </div></>
  );
}
