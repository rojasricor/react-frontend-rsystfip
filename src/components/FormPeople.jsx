import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import DivRow from "./DivRow";
import SelectPerson from "./SelectPerson";
import SelectDocument from "./SelectDocument";
import SelectFaculties from "./SelectFaculties";
import InputDocumentNumber from "./InputDocumentNumber";
import InputFullname from "./InputFullname";
import TextareaAsunt from "./TextareaAsunt";
import FooterFormPeople from "./FooterFormPeople";

const FormPeople = ({ action }) => {
  const { setStatus, schedulePerson, editPerson } = useContext(PeopleContext);

  const isEdit = action === "edit";

  const doForPerson = (evt) => {
    evt.preventDefault();

    if (isEdit) return editPerson();

    setStatus("daily");
    schedulePerson();
  };

  return (
    <form onSubmit={doForPerson}>
      <DivRow clAdds=" mt-2">
        <SelectPerson />
        <InputDocumentNumber />
        <SelectDocument />
        <InputFullname />
        <SelectFaculties />
        <TextareaAsunt />
        <FooterFormPeople isAllowed={isEdit} />
      </DivRow>
    </form>
  );
};

export default FormPeople;
