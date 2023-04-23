import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cardx from "../components/Cardx";
import FormChangePsw from "./FormChangePsw";
import { API_ROUTE } from "../constants";

const FetcherDataForChangePsw = () => {
  const { role } = useParams();
  const [user, setUser] = useState([]);

  const getDatauser = async () => {
    const request = await fetch(`${API_ROUTE}/user?role=${role}`);
    const data = await request.json();
    setUser(data);
  };

  useEffect(() => {
    getDatauser();
  }, [role]);

  return (
    <Cardx x="4" title={user.email}>
      <FormChangePsw userId={user.id} />
    </Cardx>
  );
};

export default FetcherDataForChangePsw;
