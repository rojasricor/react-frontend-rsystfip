import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cardx from "../components/Cardx";
import FormChangePsw from "./FormChangePsw";
import { API_ROUTE } from "../utils/constants";

export default function FetcherDataForChangePsw() {
  const { role } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${API_ROUTE}/get/users/one?role=${role}`)
      .then((request) => request.json())
      .then((data) => setUser(data));
  }, [role]);

  return (
    <Cardx x="4" title={`Cambiar contraseña para ${user.email}`}>
      <FormChangePsw userId={user.id} />
    </Cardx>
  );
}
