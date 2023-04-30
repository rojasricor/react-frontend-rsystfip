import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import CancelledRow from "./CancelledRow";
import { API_ROUTE } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";

const TableCancelled = () => {
  const [people, setPeople] = useState([]);

  const getCancelled = async () => {
    try {
      const { data } = await axios(`${API_ROUTE}/cancelled`);
      setPeople(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    getCancelled();
  }, []);

  return (
    <Table responsive hover striped size="sm" className="text-center">
      <caption>Cancelled people history.</caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>Nombres</th>
          <th>Identifación</th>
          <th>Categoría</th>
          <th>Facultad</th>
          <th>Motivo</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <CancelledRow key={index} index={index} person={person} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableCancelled;
