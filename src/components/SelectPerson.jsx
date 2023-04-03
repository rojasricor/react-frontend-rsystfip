import { useContext, useState, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { API_ROUTE, RESOURCE_ROUTE, UNSET_STATUS } from "../constants/api";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default function SelectPerson() {
  const {
    setDisabledAll,
    setDisabledAfterAutocomplete,
    setPerson,
    person,
    facultieSelectRef,
    setDeans,
  } = useContext(PeopleContext);
  const [categories, setCategories] = useState([]);

  async function getDeans() {
    const request = await fetch(`${API_ROUTE}/deans`);
    const data = await request.json();
    setDeans(data);
  }

  useEffect(() => {
    if (person !== UNSET_STATUS) {
      setDisabledAll(false);
      setDisabledAfterAutocomplete(false);
      facultieSelectRef.current.className = "form-select";
      facultieSelectRef.current.disabled = false;
      if (person === "5") {
        facultieSelectRef.current.disabled = true;
      }
      person === "4" && getDeans();
    }
  }, [person]);

  useEffect(() => {
    fetch(`${RESOURCE_ROUTE}?resource=categories`)
      .then((request) => request.json())
      .then((data) => setCategories(data));
  }, []);

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
        {categories.map((categorie, index) => (
          <option key={index} value={categorie.id}>
            {categorie.person}
          </option>
        ))}
      </select>
      <Label labelInfo="Persona a registrar:" />
    </FloatingFormCol12x>
  );
}
