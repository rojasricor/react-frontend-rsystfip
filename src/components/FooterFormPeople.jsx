import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PeopleContext } from "../context/PeopleContext";
import { ProtectedElement } from "./Protected";
import { ToastContainer } from "react-toastify";
import Spinner from "./Spinner";
import SmallCaption from "./SmallCaption";
import { FaCheckDouble } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

export default function FooterFormPeople({ actionRequireIt }) {
  const { loading } = useContext(PeopleContext);
  const navigate = useNavigate();
  return (
    <>
      <ProtectedElement isAllowed={actionRequireIt}>
        <div className="col-md-6">
          <button
            onClick={(evt) => {
              evt.preventDefault();
              navigate(-1);
            }}
            className="w-100 btn btn-light btn-lg border mb-2"
          >
            Volver <GiReturnArrow />
          </button>
        </div>
      </ProtectedElement>
      <div className={actionRequireIt ? "col-md-6" : "col-md-12"}>
        <button
          className="w-100 btn btn-primary btn-lg border mb-2"
          disabled={loading}
        >
          {!loading ? (
            <>
              Guardar <FaCheckDouble className="mb-1" />
            </>
          ) : (
            <Spinner tam="lg" />
          )}
        </button>
      </div>
      <SmallCaption />
      <ToastContainer />
    </>
  );
}
