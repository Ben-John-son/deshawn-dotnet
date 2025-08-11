import { useEffect, useState } from "react";
import { getCities } from "./apiManager";
import { Card, Button, Dropdown } from "react-bootstrap"; // Make sure react-bootstrap is installed

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities()
      .then(setCities)
      .catch((error) => {
        console.error("Failed to fetch cities:", error);
      });
  }, []);

  return (
    <><div>
      <Button>Cities</Button>
      <Button>Add City</Button>
      {cities.map(city =>
        <h2>{city.name}, {city.state}</h2>
      )}
      </div></>
  );
}
