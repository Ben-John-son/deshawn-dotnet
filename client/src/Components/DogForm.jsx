import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { addDog, getCities } from "../apiManager";
import Select from "react-select";

export default function NewDog({ onAdded }) {
  const [formInput, setFormInput] = useState({
    Name: "",
    Picture: "",
    CityId: null,
  });
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    getCities()
      .then((data) => setCities(data))
      .catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formInput.Name || !formInput.Picture || !formInput.CityId) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const newDog = await addDog(formInput);
      onAdded(newDog);
      setFormInput({ Name: "", Picture: "", CityId: null });
      setSelectedCity(null);
    } catch (err) {
      console.error(err);
    }
  };

  const cityOptions = cities.map((c) => ({
    value: c.id,
    label: c.name,
  }));

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Control
        type="text"
        placeholder="Dog Name"
        name="Name"
        value={formInput.Name}
        onChange={(e) =>
          setFormInput((prev) => ({ ...prev, Name: e.target.value }))
        }
        className="mb-2"
      />
      <Form.Control
        type="text"
        placeholder="Picture URL"
        name="Picture"
        value={formInput.Picture}
        onChange={(e) =>
          setFormInput((prev) => ({ ...prev, Picture: e.target.value }))
        }
        className="mb-2"
      />

      <div className="mb-2" style={{ width: "100%" }}>
        <Select
          value={selectedCity}
          onChange={(option) => {
            setSelectedCity(option);
            setFormInput((prev) => ({ ...prev, CityId: option.value }));
          }}
          options={cityOptions}
          placeholder="Select City"
        />
      </div>

      <Button type="submit" variant="primary">
        Add Dog
      </Button>
    </Form>
  );
}
