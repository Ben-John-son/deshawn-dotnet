import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function WalkerForm({ walker, cities, onSave }) {
  const [name, setName] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    if (walker) {
      setName(walker.name || "");
      setSelectedCities(walker.cities?.map((c) => c.id) || []);
    }
  }, [walker]);

  const handleCityToggle = (cityId) => {
    setSelectedCities((prev) =>
      prev.includes(cityId)
        ? prev.filter((id) => id !== cityId)
        : [...prev, cityId]
    );
  };

    const handleSave = () => {
    const updatedWalkerDTO = {
      id: walker.id,
      name,
      picture: walker.picture,
      cityId: walker.cityId,
      cities: cities.filter((c) => selectedCities.includes(c.id))
    };
    onSave(updatedWalkerDTO);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="walkerName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="walkerName"
          placeholder="Enter walker name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cities</Form.Label>
        {cities.map((city) => (
          <Form.Check
            key={city.id}
            type="checkbox"
            name={`city-${city.id}`}
            label={city.name}
            checked={selectedCities.includes(city.id)}
            onChange={() => handleCityToggle(city.id)}
          />
        ))}
      </Form.Group>
      <Button type="button" variant="primary" onClick={handleSave}>
  Save
</Button>
    </Form>
  );
}
