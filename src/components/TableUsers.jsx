import { useState, useEffect } from "react";
import { API_ROUTE } from "../constants/api";
import Table from "./Table";
import DashboardRow from "./DashboardRow";

export default function TableUsers() {
  const [usersDashboard, setUsersDashboard] = useState([]);

  useEffect(() => {
    fetch(`${API_ROUTE}/users`)
      .then((request) => request.json())
      .then((data) => setUsersDashboard(data));
  }, []);

  return (
    <Table>
      <caption>Access users.</caption>
      <thead>
        <tr>
          <th>Correo institucional</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usersDashboard.map((user, index) => (
          <DashboardRow key={index} user={user} />
        ))}
      </tbody>
    </Table>
  );
}
