import { useState, useEffect } from "react";
import Table from "./Table";
import CancelledRow from "./CancelledRow";
import { API_ROUTE } from "../constants/api";

export default function TableCancelled() {
  const [people, setPeople] = useState([]);
  async function getCancelled() {
    const request = await fetch(`${API_ROUTE}/cancelled`);
    const data = await request.json();
    setPeople(data);
  }

  useEffect(() => {
    getCancelled();
  }, []);

  return (
    <Table>
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
          <CancelledRow key={index} idx={index} person={person} />
        ))}
      </tbody>
    </Table>
  );
}
