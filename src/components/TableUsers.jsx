import { useState, useEffect } from "react";
import { API_ROUTE } from "../constants";
import { Table } from "react-bootstrap";
import UserRow from "./UserRow";
import axios from "axios";
import { toast } from "react-toastify";

const TableUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios(`${API_ROUTE}/users`);
      setUsers(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Table responsive hover striped size="sm" className="text-center">
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
