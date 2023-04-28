import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import FormChangePsw from "./FormChangePsw";
import { API_ROUTE } from "../constants";
import { toast } from "react-toastify";

const FetcherDataForChangePsw = () => {
  const { role } = useParams();
  const [user, setUser] = useState([]);

  const getDatauser = async () => {
    try {
      const request = await fetch(`${API_ROUTE}/user?role=${role}`);
      const data = await request.json();
      setUser(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getDatauser();
  }, [role]);

  return (
    <Col md={4} className="mx-auto">
      <Card className="py-2">
        <h1 className="h3 text-center">{user.email}</h1>
        <Card.Body>
          <FormChangePsw userId={user.id} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FetcherDataForChangePsw;
