import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { addCity } from "../apiManager";

export default function CityForm({ onAdded }) {
  const [formInput, setFormInput] = useState({
    Name: "",
    State: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newCity = await addCity(formInput);
      onAdded(newCity);
      setFormInput({ Name: "", State: "" }); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="City Name"
        name="Name"
        value={formInput.Name}
        onChange={(e) =>
          setFormInput((prev) => ({ ...prev, Name: e.target.value }))
        }
        className="mb-2"
      />
      <Form.Control
        type="text"
        placeholder="State"
        name="State"
        value={formInput.State}
        onChange={(e) =>
          setFormInput((prev) => ({ ...prev, State: e.target.value }))
        }
        className="mb-2"
      />
      <Button type="submit" variant="primary">
        Add City
      </Button>
    </Form>
  );
}
