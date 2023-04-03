import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { UNSET_STATUS, RESOURCE_ROUTE } from "../utils/constants";
import FloatingFormCol12x from "./FloatingFormCol12x";

export default function SelectPerson() {
  const {
    setDisabledAll,
    setDisabledAfterAutocomplete,
    setPerson,
    person,
    facultieSelectRef,
    getStaffDeans,
  } = useContext(PeopleContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${RESOURCE_ROUTE}?resource=categories`)
      .then((request) => request.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    if (person !== UNSET_STATUS) {
      setDisabledAll(false);
      setDisabledAfterAutocomplete(false);
      facultieSelectRef.current.className = "form-select";
      facultieSelectRef.current.disabled = false;
      if (person === "5") {
        facultieSelectRef.current.disabled = true;
      }
      person === "4" && getStaffDeans();
    }
  }, [person]);

  return (
    <FloatingFormCol12x x="6">
      <select
        onChange={(evt) => setPerson(evt.target.value)}
        value={person}
        className="form-select"
        required
      >
        <option value={UNSET_STATUS} disabled>
          No seleccionado
        </option>
        {categories.map((categorie, index) => {
          return (
            <option key={index} value={categorie.id}>
              {categorie.person}
            </option>
          );
        })}
      </select>
      <label className="form-label">Persona a registrar:</label>
    </FloatingFormCol12x>
  );
}
