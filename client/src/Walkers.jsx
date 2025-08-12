import { useEffect, useState } from "react";
import { getWalkers, getCities } from "./apiManager";
import { Card, Button, Dropdown, DropdownItem } from "react-bootstrap"; // Make sure react-bootstrap is installed
import WalkerCard from "./Components/WalkerCard";

export default function Walkers() {
  const [walkers, setWalkers] = useState([]);
  const [cities, setCities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  
  const getAllWalkers = () => {
    getWalkers().then((data) => {
      setWalkers(data);
      setFiltered(data);
    });
  };

  useEffect(() => {
    getAllWalkers();
  }, []);

const handleClick = (cityId) => {
  if (cityId === "all") {
    setFiltered(walkers);
  } else {
    setFiltered(walkers.filter((walker) => walker.cityId === cityId));
  }
};


  // const handleAll = () => {
   
  //     setFiltered(walkers)
    
  // }

  useEffect(() =>
  {
    getCities().then(setCities)
  },[]);

  return (
    <><div className="addWalkerBTN">
      <Button className="addWalker">Add Walker</Button>
      <Button onClick={() => handleClick("all")}>All Walkers</Button>
      
      
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Walkers by City
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        {cities.map((city) =>
        (
          <DropdownItem key={city.id} onClick={() => handleClick(city.id)} id="filtered">{city.name}</DropdownItem>
        ))}
       
      </Dropdown.Menu>
    </Dropdown>
      
      
    </div><div id="walkerCards" className="d-flex flex-wrap gap-3 p-3">
        {filtered.map((walker) => <WalkerCard key={walker.id} walkerObj={walker}/>)}
      </div></>
  );
}
