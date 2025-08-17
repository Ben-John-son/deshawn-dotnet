import React, { useEffect, useState } from "react";
import { Card, Dropdown, DropdownItem, Button } from "react-bootstrap";
import { getDogs, assignDog, deleteWalker } from "../apiManager";

export default function WalkerCard({ walkerObj, onDelete }) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs().then(setDogs);
  }, []);

  const handleClick = (dogId) => {
    assignDog(walkerObj.id, dogId).then(() => {
      setDogs((prevDogs) =>
        prevDogs.map((d) =>
          d.id === dogId ? { ...d, walkerId: walkerObj.id } : d
        )
      );
    });
  };

  return (
    <Card key={walkerObj.id} className="walkerCard">
      <Card.Img variant="top" src={walkerObj.picture} />
      <Card.Body>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-current">
            {walkerObj.name} - Currently Walking
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Dogs</Dropdown.Header>
            {dogs
              .filter((d) => d.walkerId === walkerObj.id)
              .map((dog) => (
                <DropdownItem key={dog.id}>{dog.name}</DropdownItem>
              ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-add">
            Add Dog
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Available Dogs</Dropdown.Header>
            {dogs
              .filter(
                (d) =>
                  d.cityId === walkerObj.cityId && d.walkerId !== walkerObj.id
              )
              .map((dog) => (
                <DropdownItem key={dog.id} onClick={() => handleClick(dog.id)}>
                  {dog.name}
                </DropdownItem>
              ))}
          </Dropdown.Menu>
        </Dropdown>
        <Button
          id="removeBTN"
          variant="primary"
          onClick={() => {
            deleteWalker(walkerObj.id).then(() => onDelete(walkerObj.id));
          }}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}
