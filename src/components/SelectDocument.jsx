import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../utils/constants";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default function SelectDocument() {
  const { setDoctype, doctype, disabledAll, disabledAfterAutocomplete } =
    useContext(PeopleContext);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch(`${RESOURCE_ROUTE}?resource=documents`)
      .then((request) => request.json())
      .then((data) => setDocuments(data));
  }, []);

  return (
    <FloatingFormCol12x x="6">
      <select
        onChange={(evt) => setDoctype(evt.target.value)}
        value={doctype}
        className="form-select"
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      >
        <option value={UNSET_STATUS} disabled>
          No seleccionado
        </option>
        {documents.map((document, index) => (
          <option key={index} value={document.id}>
            {document.description}
          </option>
        ))}
      </select>
      <Label labelInfo="Tipo de Documento:" />
    </FloatingFormCol12x>
  );
}
