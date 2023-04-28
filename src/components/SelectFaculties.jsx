import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { FloatingLabel, FormSelect } from "react-bootstrap";

const SelectFaculties = () => {
  const {
    disabledAll,
    disabledAfterAutocomplete,
    facultie,
    setFacultie,
    facultieSelectRef,
  } = useContext(PeopleContext);
  const [faculties, setFaculties] = useState([]);

  const getFaculties = async () => {
    try {
      const { data } = await axios(`${RESOURCE_ROUTE}?resource=faculties`);
      setFaculties(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getFaculties();
  }, []);

  return (
    <FloatingLabel label="Facultad:">
      <FormSelect
        onChange={({ target: { value } }) => setFacultie(value)}
        value={facultie}
        ref={facultieSelectRef}
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      >
        <option value={UNSET_STATUS} disabled>
          No seleccionado
        </option>
        {faculties.map(({ id, facultie }, index) => (
          <option key={index} value={id}>
            {facultie}
          </option>
        ))}
      </FormSelect>
    </FloatingLabel>
  );
};

export default SelectFaculties;
