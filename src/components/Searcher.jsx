import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_ROUTE } from "../utils/constants";
import Spinner from "../components/Spinner";
import TablePeople from "../components/TablePeople";
import { FaSyncAlt, FaTimes } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

export default function Searcher() {
  const iptFilterRef = useRef(null);

  const [loading, setLoading] = useState(0);
  const [peopleFiltered, setPeopleFiltered] = useState([]);
  const [people, setPeople] = useState([]);

  async function getPeople() {
    try {
      const request = await fetch(`${API_ROUTE}/get/people`);
      const data = await request.json();
      setPeople(data);
      setPeopleFiltered(data);
      iptFilterRef.current.focus();
    } catch (err) {
      setLoading(2);
    } finally {
      setLoading(1);
    }
  }

  useEffect(() => {
    getPeople();
  }, []);

  let timerId = null;
  function handleFilterChange(evt) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      const query = evt.target.value.toLowerCase();
      setPeopleFiltered(
        people.filter(
          ({ name, num_doc }) =>
            name.toLowerCase().startsWith(query) || num_doc.startsWith(query)
        )
      );
    }, 500);
  }

  return (
    <>
      <div className="form-inline">
        <div className="btn-group btn-group-sm position-fixed bottom-px mb-2 mt-2">
          <input
            onChange={handleFilterChange}
            type="search"
            placeholder="Buscar una persona..."
            className="form-control form-control-sm"
            ref={iptFilterRef}
          />
          <button
            onClick={() => {
              setPeopleFiltered(people);
            }}
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
        </div>
      </div>
      <div className="table-responsive">
        <TablePeople peopleFiltered={peopleFiltered} />
      </div>
    </>
  );
}
