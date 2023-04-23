import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { useNavigate } from "react-router-dom";
import ProtectedElement from "./ProtectedElement";
import DivCol12 from "./DivCol12";
import Spinner from "./Spinner";
import SmallCaption from "./SmallCaption";
import { FaUserPlus } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import Notify from "./Notify";

const FooterFormPeople = ({ isAllowed }) => {
  const { loading } = useContext(PeopleContext);
  const navigate = useNavigate();

  const returnToBack = (evt) => {
    evt.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <ProtectedElement isAllowed={isAllowed}>
        <DivCol12 x="6">
          <button
            onClick={returnToBack}
            className="w-100 btn btn-light border my-2"
          >
            Volver <GiReturnArrow />
          </button>
        </DivCol12>
      </ProtectedElement>
      <DivCol12 x={isAllowed ? "6" : "12"}>
        <button className="w-100 btn btn-primary my-2" disabled={loading}>
          {!loading ? (
            <>
              Registrar <FaUserPlus className="mb-1" />
            </>
          ) : (
            <Spinner tam="lg" />
          )}
        </button>
      </DivCol12>
      <SmallCaption />
      <Notify />
    </>
  );
};

export default FooterFormPeople;
