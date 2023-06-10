import { useContext, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import * as Cst from "../constants";
import { FloatingLabel, FormSelect } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../features/resources/resourcesSlice";

const SelectPerson = () => {
  const { API_ROUTE, RESOURCE_ROUTE, UNSET_STATUS } = Cst;
  const {
    setDisabledAll,
    setDisabledAfterAutocomplete,
    setPerson,
    person,
    facultieSelectRef,
    setDeans,
  } = useContext(PeopleContext);

  const dispatch = useDispatch();

  const categoriesState = useSelector(({ resources }) => resources.categories);

  const getDeans = async () => {
    try {
      const { data } = await axios(`${API_ROUTE}/deans`);
      setDeans(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    if (person !== UNSET_STATUS) {
      setDisabledAll(false);
      setDisabledAfterAutocomplete(false);
      facultieSelectRef.current.className = "form-select";
      facultieSelectRef.current.disabled = false;
      if (person === "5") facultieSelectRef.current.disabled = true;

      person === "4" && getDeans();
    }
  }, [person]);

  const getCategories = async () => {
    try {
      const { data } = await axios(`${RESOURCE_ROUTE}?resource=categories`);

      dispatch(setCategories(data));
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <FloatingLabel label="Persona a registrar:">
      <FormSelect
        onChange={({ target: { value } }) => setPerson(value)}
        value={person}
        required
      >
        <option value={UNSET_STATUS} disabled>
          No seleccionado
        </option>
        {categoriesState.map(({ id, category }, index) => (
          <option key={index} value={id}>
            {category}
          </option>
        ))}
      </FormSelect>
    </FloatingLabel>
  );
};

export default SelectPerson;
