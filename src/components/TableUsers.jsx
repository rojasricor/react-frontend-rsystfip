import { useState, useEffect } from "react";
import { API_ROUTE } from "../constants/api";
import Table from "./Table";
import UserRow from "./UserRow";

const TableUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const request = await fetch(`${API_ROUTE}/users`);
    const data = await request.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
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
        {users.map((user, index) => (
          <UserRow key={index} user={user} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableUsers;
