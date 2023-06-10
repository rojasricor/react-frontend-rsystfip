import { useContext, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
import { FloatingLabel, FormSelect } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setDocuments } from "../features/resources/resourcesSlice";

const SelectDocument = () => {
  const { setDoctype, doctype, disabledAll, disabledAfterAutocomplete } =
    useContext(PeopleContext);

  const dispatch = useDispatch();

  const documentsState = useSelector(({ resources }) => resources.documents);

  const getDocuments = async () => {
    try {
      const { data } = await axios(`${RESOURCE_ROUTE}?resource=documents`);

      dispatch(setDocuments(data));
    } catch ({ message }) {
      toast.error(message);
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
        {documentsState.map(({ id, description }, index) => (
          <option key={index} value={id}>
            {description}
          </option>
        ))}
      </FormSelect>
    </FloatingLabel>
  );
};

export default SelectDocument;
