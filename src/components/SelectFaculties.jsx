import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCES_ROUTE } from "../utils/constants";

export default function SelectFaculties() {
  const { facultie, setFacultie, facultieSelectRef } =
    useContext(PeopleContext);
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetch(`${RESOURCES_ROUTE}?resource=faculties`)
      .then((request) => request.json())
      .then((data) => setFaculties(data));
  }, []);

  return (
    <div className="col-12">
      <div className="form-floating">
        <select
          onChange={(evt) => setFacultie(evt.target.value)}
          value={facultie}
          className="form-select"
          ref={facultieSelectRef}
          disabled
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
      </div>
    </div>
  );
}
