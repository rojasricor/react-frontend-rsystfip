import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import SelectPerson from "./SelectPerson";
import InputDocumentNumber from "./InputDocumentNumber";
import SelectDocument from "./SelectDocument";
import InputFullname from "./InputFullname";
import SelectFaculties from "./SelectFaculties";
import TextareaAsunt from "./TextareaAsunt";
import InputColor from "./InputColor";
import SmallCaption from "./SmallCaption";
import Spinner from "./Spinner";
import Notify from "./Notify";
import { IoCalendarNumber } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";

const FormSchedulePeople = () => {
  const { schedulePerson, loading } = useContext(PeopleContext);

  const doSchedulePerson = (evt) => {
    evt.preventDefault();
    schedulePerson();
  };

  return (
    <form onSubmit={doSchedulePerson} className="row g-2 mt-2 p-2">
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
        <button className="btn btn-primary">
          {!loading ? (
            <>
              Agendar <IoCalendarNumber className="mb-1" />
            </>
          ) : (
            <Spinner />
          )}
        </button>
      </div>
      <Notify />
    </form>
  );
};

export default FormSchedulePeople;
