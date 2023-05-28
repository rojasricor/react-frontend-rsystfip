import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ROUTE } from "../constants";
import { Spinner, FormControl, Button, ButtonGroup } from "react-bootstrap";
import TablePeople from "./TablePeople";
import { setPeople } from "../features/people/peopleSlice";
import { useDispatch } from "react-redux";
import { FaSyncAlt, FaTimes } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

const Searcher = () => {
  const [loading, setLoading] = useState(0);
  const [peopleFiltered, setPeopleFiltered] = useState([]);

  const dispatch = useDispatch();

  const getPeople = async () => {
    try {
      const { data } = await axios(`${API_ROUTE}/people`);
      dispatch(setPeople(data));
      setPeopleFiltered(data);
    } catch ({ message }) {
      setLoading(2);
      toast.error(message);
    } finally {
      setLoading(1);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  const filterPeople = (e) => {
    const query = e.target.value.toLowerCase();

    dispatch(
      setPeople(
        peopleFiltered.filter(
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
        <Button onClick={() => getPeople()} title="Refrescar datos">
          {loading === 0 ? (
            <Spinner size="sm" />
          ) : loading === 1 ? (
            <FaSyncAlt className="mb-1" />
          ) : (
            <FaTimes className="text-danger mb-1" />
          )}
        </Button>
        <Link
          to="/people/add"
          className="btn btn-primary"
          title="Agendamiento por día"
        >
          <ImUserPlus className="mb-1" />
        </Link>
        <Link
          to="/people/schedule"
          className="btn btn-primary"
          title="Agendamiento programado"
        >
          <IoCalendarNumber className="mb-1" />
        </Link>
      </ButtonGroup>
      <TablePeople />
    </>
  );
};

export default Searcher;
