import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { useNavigate } from "react-router-dom";
import ProtectedElement from "./ProtectedElement";
import { Button, Spinner } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const FooterFormPeople = ({ isAllowed }) => {
  const { loading } = useContext(PeopleContext);
  const navigate = useNavigate();

  const returnToBack = (evt) => {
    evt.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <Button className="m-1" disabled={loading} type="submit">
        {!loading ? (
          <>
            Registrar <FaUserPlus className="mb-1" />
          </>
        ) : (
          <Spinner size="sm" />
        )}
      </Button>
      <ProtectedElement isAllowed={isAllowed}>
        <Button
          variant="light"
          onClick={returnToBack}
          className="m-1"
          type="submit"
        >
          Volver <GiReturnArrow />
        </Button>
      </ProtectedElement>
    </>
  );
};

export default FooterFormPeople;
