import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
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
      const request = await fetch(`${RESOURCE_ROUTE}?resource=faculties`);
      const data = await request.json();
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
        {faculties.map(({ id, name }, index) => (
          <option key={index} value={id}>
            {name}
          </option>
        ))}
      </FormSelect>
    </FloatingLabel>
  );
};

export default SelectFaculties;
