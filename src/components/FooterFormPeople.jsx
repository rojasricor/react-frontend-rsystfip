import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import { useNavigate } from "react-router-dom";
import ProtectedElement from "./ProtectedElement";
import DivCol12 from "./DivCol12";
import Spinner from "./Spinner";
import SmallCaption from "./SmallCaption";
import { FaUserPlus } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { ToastContainer } from "react-toastify";

export default function FooterFormPeople({ actionRequireIt }) {
  const { loading } = useContext(PeopleContext);
  const navigate = useNavigate();
  return (
    <>
      <ProtectedElement isAllowed={actionRequireIt}>
        <DivCol12 x="6">
          <button
            onClick={(evt) => {
              evt.preventDefault();
              navigate(-1);
            }}
            className="w-100 btn btn-light btn-lg border my-2"
          >
            Volver <GiReturnArrow />
          </button>
        </DivCol12>
      </ProtectedElement>
      <DivCol12 x={actionRequireIt ? "6" : "12"}>
        <button
          className="w-100 btn btn-primary btn-lg border my-2"
          disabled={loading}
        >
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
      <ToastContainer />
    </>
  );
}
