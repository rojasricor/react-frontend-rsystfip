import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaSyncAlt, FaTimes } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

export default function Searcher({
  handleFilterChange,
  setPeopleFiltered,
  loading,
  iptFilterRef,
}) {
  return (
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
  );
}
