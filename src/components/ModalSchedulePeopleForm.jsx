import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { IoCalendarNumber } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import SelectPerson from "./SelectPerson";
import InputDocumentNumber from "./InputDocumentNumber";
import SelectDocument from "./SelectDocument";
import InputFullname from "./InputFullname";
import SelectFaculties from "./SelectFaculties";
import TextareaAsunt from "./TextareaAsunt";
import InputColor from "./InputColor";
import SmallCaption from "./SmallCaption";
import Spinner from "./Spinner";

export default function ModalSchedulePeopleForm() {
  const { schedulePerson, loading } = useContext(PeopleContext);

  function HandleSubmitSchedule(evt) {
    evt.preventDefault();
    schedulePerson();
  }

  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      id="modal-scheduling"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Agendamiento Programado</h1>
            <button className="btn-close" data-bs-dismiss="modal" />
          </div>
          <div className="modal-body">
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
          </div>
        </div>
      </div>
    </div>
  );
}
