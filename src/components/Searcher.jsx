import { useState, useEffect, startTransition } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API_ROUTE } from "../constants";
import { Spinner, FormControl, Button, ButtonGroup } from "react-bootstrap";
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
    } catch (err) {
      setLoading(2);
      toast.error(err);
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
    <>
      <ButtonGroup className="position-fixed bottom-px">
        <FormControl
          onChange={filterPeople}
          type="search"
          size="sm"
          placeholder="Buscar"
          autoFocus
        />
        <Button
          onClick={() => setPeopleFiltered(people)}
          title="Refrescar datos"
        >
          {loading === 0 ? (
            <Spinner size="sm" />
          ) : loading === 1 ? (
            <FaSyncAlt />
          ) : (
            <FaTimes className="text-danger" />
          )}
        </Button>
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
      </ButtonGroup>
      <TablePeople peopleFiltered={peopleFiltered} />
    </>
  );
};

export default Searcher;
