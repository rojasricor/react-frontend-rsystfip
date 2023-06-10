import { useContext, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { FloatingLabel, FormSelect } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setFaculties } from "../features/resources/resourcesSlice";

const SelectFaculties = () => {
  const { handleChange, facultieSelectRef } = useContext(PeopleContext);

  const dispatch = useDispatch();

  const formDataState = useSelector(({ programming }) => programming.formData);
  const facultiesState = useSelector(({ resources }) => resources.faculties);

  const getFaculties = async () => {
    try {
      const { data } = await axios(`${RESOURCE_ROUTE}?resource=faculties`);

      dispatch(setFaculties(data));
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    getFaculties();
  }, []);

  return (
    <FloatingLabel label="Facultad:">
      <FormSelect
        name="facultie"
        onChange={handleChange}
        value={formDataState.facultie}
        ref={facultieSelectRef}
        disabled={
          formDataState.disabledAll || formDataState.disabledAfterAutocomplete
        }
        required
      >
        <option value={UNSET_STATUS} disabled>
          No seleccionado
        </option>
        {facultiesState.map(({ id, facultie }, index) => (
          <option key={index} value={id}>
            {facultie}
          </option>
        ))}
      </FormSelect>
    </FloatingLabel>
  );
};

export default SelectFaculties;
