import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_ROUTE } from "../utils/api";
import BtnGroup from "./BtnGroup";
import Spinner from "./Spinner";
import Responsive from "./Responsive";
import TablePeople from "./TablePeople";
import { FaSyncAlt, FaTimes } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

export default function Searcher() {
  const [loading, setLoading] = useState(0);
  const [peopleFiltered, setPeopleFiltered] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`${API_ROUTE}/people`)
      .then((request) => request.json())
      .then((data) => {
        setPeople(data);
        setPeopleFiltered(data);
      })
      .catch(() => setLoading(2))
      .finally(() => setLoading(1));
  }, []);

  let timerId = null;
  function filterPeople(evt) {
    clearTimeout(timerId);
    const query = evt.target.value.toLowerCase();
    timerId = setTimeout(
      () =>
        setPeopleFiltered(
          people.filter(
            ({ name, num_doc }) =>
              name.toLowerCase().startsWith(query) || num_doc.startsWith(query)
          )
        ),
      500
    );
  }

  return (
    <>
      <BtnGroup clAdds=" position-fixed bottom-px my-2">
        <input
          onChange={filterPeople}
          type="search"
          placeholder="Buscar una persona..."
          className="form-control form-control-sm border"
          autoFocus
        />
        <button
          onClick={() => setPeopleFiltered(people)}
          className="btn btn-fc-primary"
          title="Refrescar datos"
        >
          {loading === 0 ? (
            <Spinner tam="sm mt-1" />
          ) : loading === 1 ? (
            <FaSyncAlt />
          ) : (
            <FaTimes className="text-danger" />
          )}
        </button>
        <Link
          to="/people/add"
          className="btn btn-fc-primary"
          title="Agendamiento por día"
        >
          <ImUserPlus className="mt-1" />
        </Link>
        <Link
          to="/people/schedule"
          className="btn btn-fc-primary"
          title="Agendamiento programado"
        >
          <IoCalendarNumber className="mt-1" />
        </Link>
      </BtnGroup>
      <Responsive>
        <TablePeople peopleFiltered={peopleFiltered} />
      </Responsive>
    </>
  );
}
