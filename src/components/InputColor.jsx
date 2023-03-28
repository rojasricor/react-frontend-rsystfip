import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import DivCol12 from "./DivCol12";

export default function InputColor() {
  const { color, setColor } = useContext(PeopleContext);

  return (
    <DivCol12>
      <input
        onChange={(evt) => setColor(evt.target.value)}
        className="form-control form-control-color mb-3"
        type="color"
        title="Choose your color"
        value={color}
      />
    </DivCol12>
  );
}
