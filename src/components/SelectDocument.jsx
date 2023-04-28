import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
import { FloatingLabel, FormSelect } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const SelectDocument = () => {
  const { setDoctype, doctype, disabledAll, disabledAfterAutocomplete } =
    useContext(PeopleContext);
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    try {
      const { data } = await axios(`${RESOURCE_ROUTE}?resource=documents`);
      setDocuments(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <FloatingLabel label="Tipo de Documento:">
      <FormSelect
        onChange={({ target: { value } }) => setDoctype(value)}
        value={doctype}
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
      </FormSelect>
    </FloatingLabel>
  );
};

export default SelectDocument;
