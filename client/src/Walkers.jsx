import { useEffect, useState } from "react";
import { getWalkers, getCities } from "./apiManager";
import { Card, Button, Dropdown, DropdownItem } from "react-bootstrap"; // Make sure react-bootstrap is installed
import WalkerCard from "./Components/WalkerCard";

export default function Walkers() {
  const [walkers, setWalkers] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getWalkers()
      .then(setWalkers)
      .catch((error) => {
        console.error("Failed to fetch walkers:", error);
      });
  }, []);

  useEffect(() =>
  {
    getCities().then(setCities)
  },[]);

  return (
    <><div className="addWalkerBTN">
      <Button className="addWalker">Add Walker</Button>
      
      
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Walkers by City
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        {cities.map((city) =>
        (
          <DropdownItem >{city.name}</DropdownItem>
        ))}
       
      </Dropdown.Menu>
    </Dropdown>
      
      
    </div><div id="walkerCards" className="d-flex flex-wrap gap-3 p-3">
        {walkers.map((walker) => <WalkerCard key={walker.id} walkerObj={walker}/>)}
      </div></>
  );
}
