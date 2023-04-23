import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../constants";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";
import { toast } from "react-toastify";

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
    <FloatingFormCol12x>
      <select
        onChange={({ target: { value } }) => setFacultie(value)}
        value={facultie}
        className="form-select"
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
      </select>
      <Label labelInfo="Facultad:" />
    </FloatingFormCol12x>
  );
};

export default SelectFaculties;
