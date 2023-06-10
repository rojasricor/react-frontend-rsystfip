import { useContext, useEffect } from "react";
import { PeopleContext } from "../context/PeopleContext";
import * as Cst from "../constants";
import { FloatingLabel, FormSelect } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../features/resources/resourcesSlice";
import {
  setDeans,
  setFormData,
} from "../features/programming/programmingSlice";

const SelectPerson = () => {
  const { API_ROUTE, RESOURCE_ROUTE, UNSET_STATUS } = Cst;

  const { facultieSelectRef, handleChange } = useContext(PeopleContext);

  const dispatch = useDispatch();

  const categoriesState = useSelector(({ resources }) => resources.categories);
  const formDataState = useSelector(({ programming }) => programming.formData);

  const getDeans = async () => {
    try {
      const { data } = await axios(`${API_ROUTE}/deans`);

      dispatch(setDeans(data));
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    if (formDataState.person !== UNSET_STATUS) {
      dispatch(
        setFormData({
          ...formDataState,
          disabledAll: false,
          disabledAfterAutocomplete: false,
        })
      );

      facultieSelectRef.current.className = "form-select";
      facultieSelectRef.current.disabled = false;
      if (formDataState.person === "5")
        facultieSelectRef.current.disabled = true;

      formDataState.person === "4" && getDeans();
    }
  }, [formDataState.person]);

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
        name="person"
        onChange={handleChange}
        value={formDataState.person}
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
