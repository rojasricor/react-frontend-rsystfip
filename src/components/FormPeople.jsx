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

export default function FormPeople({ action }) {
  const { setStatus, schedulePerson, editPerson } = useContext(PeopleContext);

  const actionRequireEditFunction = action === "edit";

  function HandleSubmitAdd(evt) {
    evt.preventDefault();
    setStatus(2);
    schedulePerson();
  }

  function HandleSubmitEdit(evt) {
    evt.preventDefault();
    editPerson();
  }

  return (
    <form
      onSubmit={actionRequireEditFunction ? HandleSubmitEdit : HandleSubmitAdd}
    >
      <DivRow clAdds=" mt-2">
        <SelectPerson />
        <InputDocumentNumber />
        <SelectDocument />
        <InputFullname />
        <SelectFaculties />
        <TextareaAsunt />
        <FooterFormPeople actionRequireIt={actionRequireEditFunction} />
      </DivRow>
    </form>
  );
}
