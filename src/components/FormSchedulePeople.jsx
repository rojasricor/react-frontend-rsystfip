import { useContext } from "react";
import SelectPerson from "./SelectPerson";
import InputDocumentNumber from "./InputDocumentNumber";
import SelectDocument from "./SelectDocument";
import InputFullname from "./InputFullname";
import SelectFaculties from "./SelectFaculties";
import TextareaAsunt from "./TextareaAsunt";
import InputColor from "./InputColor";
import SmallCaption from "./SmallCaption";
import Spinner from "./Spinner";
import { PeopleContext } from "../context/PeopleContext";
import { IoCalendarNumber } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";

export default function FormSchedulePeople() {
  const { schedulePerson, loading } = useContext(PeopleContext);

  function HandleSubmitSchedule(evt) {
    evt.preventDefault();
    schedulePerson();
  }

  return (
    <form onSubmit={HandleSubmitSchedule} className="row g-2 mt-2 p-2">
      <SelectPerson />
      <InputDocumentNumber />
      <SelectDocument />
      <InputFullname />
      <SelectFaculties />
      <TextareaAsunt />
      <InputColor />
      <SmallCaption />
      <div className="modal-footer">
        <button
          onClick={(evt) => evt.preventDefault()}
          className="btn btn-light border"
          data-bs-dismiss="modal"
        >
          Cerrar <GiReturnArrow className="mb-1" />
        </button>
        <button className="btn btn-primary border">
          {!loading ? (
            <>
              Agendar <IoCalendarNumber className="mb-1" />
            </>
          ) : (
            <Spinner tam="sm" />
          )}
        </button>
      </div>
    </form>
  );
}
