import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCES_ROUTE } from "../utils/constants";
import FloatingFormCol12x from "./FloatingFormCol12x";

export default function SelectFaculties() {
  const {
    disabledAll,
    disabledAfterAutocomplete,
    facultie,
    setFacultie,
    facultieSelectRef,
  } = useContext(PeopleContext);
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetch(`${RESOURCES_ROUTE}?resource=faculties`)
      .then((request) => request.json())
      .then((data) => setFaculties(data));
  }, []);

  return (
    <FloatingFormCol12x>
      <select
        onChange={(evt) => setFacultie(evt.target.value)}
        value={facultie}
        className="form-select"
        ref={facultieSelectRef}
        disabled={disabledAll || disabledAfterAutocomplete}
        required
      >
        <option value={UNSET_STATUS} disabled>
          No seleccionado
        </option>
        {faculties.map((facultie, index) => {
          return (
            <option key={index} value={facultie.id}>
              {facultie.name}
            </option>
          );
        })}
      </select>
      <label className="form-label">Facultad:</label>
    </FloatingFormCol12x>
  );
}
