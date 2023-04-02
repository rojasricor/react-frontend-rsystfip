import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_ROUTE } from "../utils/constants";
import FormChangePsw from "./FormChangePsw";

export default function GetterDataForChangePsw() {
  const { role } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${API_ROUTE}/get/users/one?role=${role}`)
      .then((request) => request.json())
      .then((data) => setUser(data));
  }, [role]);

  return (
    <>
      <h1 className="h3 text-center">Cambiar contraseña para {user.email}</h1>
      <FormChangePsw userId={user.id} />
    </>
  );
}
