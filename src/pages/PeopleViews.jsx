import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonRow from "../components/PersonRow";
import Spinner from "../components/Spinner";
import { FaSyncAlt, FaTimes } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";
import { API_ROUTE } from "../utils/constants";

export default function PeopleViews() {
  const iptFilter = useRef(null);

  const [loading, setLoading] = useState(0);
  const [people, setPeople] = useState([]);
  const [peopleFiltered, setPeopleFiltered] = useState([]);

  async function getPeople() {
    try {
      const request = await fetch(`${API_ROUTE}/get/people`);
      const data = await request.json();
      setPeople(data);
      setPeopleFiltered(data);
      iptFilter.current.focus();
    } catch (err) {
      setLoading(2);
    } finally {
      setLoading(1);
    }
  }

  useEffect(() => {
    document.title = "RSystfip | Agendated people";
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
    <div className="row">
      <div className="col-12">
        <h1 className="h3">Personas Agendadas</h1>
        <div className="form-inline">
          <div className="btn-group btn-group-sm position-fixed bottom-px mb-2 mt-2">
            <input
              onChange={handleFilterChange}
              type="search"
              placeholder="Buscar una persona..."
              className="form-control form-control-sm"
              ref={iptFilter}
            />
            <button
              onClick={() => {
                setPeopleFiltered(people);
              }}
              className="btn btn-fc-primary"
              title="Refrescar datos"
            >
              {loading === 0 ? (
                <Spinner tam="sm" />
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
              <ImUserPlus />
            </Link>
            <Link
              to="/people/schedule"
              className="btn btn-fc-primary"
              title="Agendamiento programado"
            >
              <IoCalendarNumber />
            </Link>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-sm text-center">
            <caption>Lista de personas agendadas</caption>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nombres</th>
                <th>Identifación</th>
                <th>Categoría</th>
                <th>Facultad</th>
                <th>Asunto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {peopleFiltered.map((person, index) => (
                <PersonRow key={index} person={person} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
