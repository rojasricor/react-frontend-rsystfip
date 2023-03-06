import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCES_ROUTE } from "../utils/constants";

export default function SelectDocument() {
  const { setDoctype, doctype, disabledAll } = useContext(PeopleContext);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch(`${RESOURCES_ROUTE}?resource=documents`)
      .then((request) => request.json())
      .then((data) => setDocuments(data));
  }, []);

  return (
    <div className="col-md-6">
      <div className="form-floating">
        <select
          onChange={(evt) => setDoctype(evt.target.value)}
          value={doctype}
          className="form-select"
          disabled={disabledAll}
          required
        >
          <option value={UNSET_STATUS} disabled>
            No seleccionado
          </option>
          {documents.map((document, index) => {
            return (
              <option key={index} value={document.id}>
                {document.description}
              </option>
            );
          })}
        </select>
        <label className="form-label">Tipo de Documento:</label>
      </div>
    </div>
  );
}
