import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const SelectDocument = () => {
  const { setDoctype, doctype, disabledAll, disabledAfterAutocomplete } =
    useContext(PeopleContext);
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    const request = await fetch(`${RESOURCE_ROUTE}?resource=documents`);
    const data = await request.json();
    setDocuments(data);
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <FloatingFormCol12x x="6">
      <select
        onChange={({ target: { value } }) => setDoctype(value)}
        value={doctype}
        className="form-select"
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      >
        <option value={UNSET_STATUS} disabled>
          No seleccionado
        </option>
        {documents.map(({ id, description }, index) => (
          <option key={index} value={id}>
            {description}
          </option>
        ))}
      </select>
      <Label labelInfo="Tipo de Documento:" />
    </FloatingFormCol12x>
  );
};

export default SelectDocument;
