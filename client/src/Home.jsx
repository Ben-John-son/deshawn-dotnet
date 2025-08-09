import { useEffect, useState } from "react";
import { getDogs } from "./apiManager";
import { Card, Button, Dropdown } from "react-bootstrap"; // Make sure react-bootstrap is installed

export default function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs()
      .then(setDogs)
      .catch((error) => {
        console.error("Failed to fetch dogs:", error);
      });
  }, []);

  return (
    <><div className="addDogBTN">
      <Button>Add Dog</Button>
    </div><div id="dogCards" className="d-flex flex-wrap gap-3 p-3">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <Card key={dog.id} className="dogCard">
              <Card.Img variant="top" src={dog.picture} />
              <Card.Body>
                 <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       {dog.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text> */}
                <Button id="removeBTN" variant="primary">Remove</Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No dogs available.</p>
        )}
      </div></>
  );
}
