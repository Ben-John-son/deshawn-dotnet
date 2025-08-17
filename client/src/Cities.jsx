import { useEffect, useState } from "react";
import { getCities } from "./apiManager";
import { Button } from "react-bootstrap";
import CityForm from "./Components/CityForm"; // ✅ correct import

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    getCities()
      .then(setCities)
      .catch((error) => {
        console.error("Failed to fetch cities:", error);
      });
  }, []);

  // ✅ add new city to list
  const handleCityAdded = (newCity) => {
    setCities((prev) => [...prev, newCity]);
    setFormVisible(false); // optionally hide form after add
  };

  return (
    <div>
      <Button>Cities</Button>

      <div className="addDogBTN mb-3">
        <Button onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? "Hide Form" : "Add City"}
        </Button>
      </div>

      {formVisible && <CityForm onAdded={handleCityAdded} />}

      {cities.map((city) => (
        <h2 key={city.Id}>
          {city.name}, {city.state}
        </h2>
      ))}
    </div>
  );
}
