import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";

export default function InputDocumentNumber() {
  const { disabledAll, doc, setDoc } = useContext(PeopleContext);

  return (
    <div className="col-md-6">
      <div className="form-floating">
        <input
          onChange={(evt) => setDoc(evt.target.value)}
          value={doc}
          className="form-control"
          type="number"
          placeholder="Complete campo"
          title="El número de documento debe ser de 8 a 10 dígitos"
          disabled={disabledAll}
          required
        />
        <label className="form-label">Cédula:</label>
      </div>
    </div>
  );
}
