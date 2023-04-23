import { useState, useEffect, startTransition } from "react";
import { Link } from "react-router-dom";
import { API_ROUTE } from "../constants/api";
import Rower from "./Rower";
import BtnGroup from "./BtnGroup";
import Spinner from "./Spinner";
import TablePeople from "./TablePeople";
import { FaSyncAlt, FaTimes } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

const Searcher = () => {
  const [loading, setLoading] = useState(0);
  const [peopleFiltered, setPeopleFiltered] = useState([]);
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      const request = await fetch(`${API_ROUTE}/people`);
      const data = await request.json();
      startTransition(() => {
        setPeople(data);
        setPeopleFiltered(data);
      });
    } catch {
      setLoading(2);
    } finally {
      setLoading(1);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  const filterPeople = ({ target: { value } }) => {
    const query = value.toLowerCase();
    startTransition(() =>
      setPeopleFiltered(
        people.filter(
          ({ name, document_number }) =>
            name.toLowerCase().startsWith(query) ||
            document_number.startsWith(query)
        )
      )
    );
  };

  return (
    <Rower>
      <h1 className="h3">Personas Agendadas</h1>
      <BtnGroup clAdds=" position-fixed bottom-px">
        <input
          onChange={filterPeople}
          type="search"
          placeholder="Buscar"
          className="form-control form-control-sm border"
          autoFocus
        />
        <button
          onClick={() => setPeopleFiltered(people)}
          className="btn btn-primary"
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
          className="btn btn-primary"
          title="Agendamiento por día"
        >
          <ImUserPlus />
        </Link>
        <Link
          to="/people/schedule"
          className="btn btn-primary"
          title="Agendamiento programado"
        >
          <IoCalendarNumber />
        </Link>
      </BtnGroup>
      <TablePeople peopleFiltered={peopleFiltered} />
    </Rower>
  );
};

export default Searcher;
