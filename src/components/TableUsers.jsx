import { useState, useEffect } from "react";
import { API_ROUTE } from "../utils/constants";
import DashboardRow from "./DashboardRow";

export default function TableUsers() {
  const [usersDashboard, setUsersDashboard] = useState([]);

  useEffect(() => {
    fetch(`${API_ROUTE}/get/users/manage`)
      .then((request) => request.json())
      .then((data) => setUsersDashboard(data));
  }, []);

  return (
    <table className="table table-hover table-striped table-borderless text-center">
      <caption>Usuarios con acceso.</caption>
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
    </table>
  );
}
