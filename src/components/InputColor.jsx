import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";

export default function InputColor() {
  const { color, setColor } = useContext(PeopleContext);

  return (
    <div className="col-12">
      <input
        onChange={(evt) => setColor(evt.target.value)}
        className="form-control form-control-color mb-3"
        type="color"
        title="Choose your color"
        value={color}
      />
    </div>
  );
}
