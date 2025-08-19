import React, { useEffect, useState } from "react";
import {
  Card,
  Dropdown,
  DropdownItem,
  Button,
  DropdownHeader,
  Modal
} from "react-bootstrap";
import { getDogs, assignDog, deleteWalker, getCities } from "../apiManager";
import WalkerForm from "./EditWalker";

export default function WalkerCard({ walkerObj, onDelete }) {
  const [dogs, setDogs] = useState([]);
  const [cities, setCities] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getDogs().then(setDogs).then(getCities).then(setCities);
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
  const handleSaveWalker = (updatedWalker) => {
  fetch(`/api/editWalker/${updatedWalker.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedWalker)
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to update walker");
      return res.json();
    })
    .then((updated) => {
    
      console.log("Walker updated:", updated);
      setShowForm(false); 
    })
    .catch((err) => console.error(err));
};

  return (
    <Card key={walkerObj.id} className="walkerCard">
      <Card.Img variant="top" src={walkerObj.picture} />
      <Card.Body>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-current">
            {walkerObj.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Dogs</Dropdown.Header>
            {dogs
              .filter((d) => d.walkerId === walkerObj.id)
              .map((dog) => (
                <DropdownItem key={dog.id}>{dog.name}</DropdownItem>
              ))}
            <DropdownItem onClick={() => setShowForm(true)}>
              Edit Walker
            </DropdownItem>
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

      <Modal show={showForm} onHide={() => setShowForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Walker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WalkerForm walker={walkerObj} cities={cities} onSave={handleSaveWalker}/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowForm(false)}>
            Cancel
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Card>
  );
}
