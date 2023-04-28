import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { Col, FormControl } from "react-bootstrap";

const InputColor = () => {
  const { color, setColor } = useContext(PeopleContext);

  return (
    <Col md={12}>
      <FormControl
        onChange={({ target: { value } }) => setColor(value)}
        type="color"
        title="Choose your color"
        value={color}
      />
    </Col>
  );
};

export default InputColor;
