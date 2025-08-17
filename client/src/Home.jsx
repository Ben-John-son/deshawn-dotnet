import { useEffect, useState } from "react";
import { getDogs, getWalkers, addDog, deleteDog } from "./apiManager";
import { Card, Button, Dropdown, DropdownItem, Form } from "react-bootstrap";
import NewDog from "./Components/DogForm";

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [dogWalker, setDogWalker] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
 

  useEffect(() => {
    getDogs()
      .then(setDogs)
      .then(() => getWalkers().then(setDogWalker))
      .catch((error) => {
        console.error("Failed to fetch dogs or walkers:", error);
      });
  }, []);

  return (
    <>
      <div className="addDogBTN mb-3">
        <Button onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? "Hide Form" : "Add Dog"}
        </Button>
      </div>

      {formVisible && (
        <NewDog onAdded={(newDog) => setDogs((prev) => [...prev, newDog])} />
      )}

      <div id="dogCards" className="d-flex flex-wrap gap-3 p-3">
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
                    <Dropdown.Header>Walker</Dropdown.Header>
                    {dogWalker
                      .filter((walker) => walker.id === dog.walkerId)
                      .map((walk) => (
                        <DropdownItem key={walk.id}>{walk.name}</DropdownItem>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Button
                  id="removeBTN"
                  variant="primary"
                  onClick={async () => {
                    try {
                      await deleteDog(dog.id);
                      setDogs((prev) => prev.filter((d) => d.id !== dog.id));
                    } catch (err) {
                      console.error("Failed:", err);
                    }
                  }}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No dogs available.</p>
        )}
      </div>
    </>
  );
}
