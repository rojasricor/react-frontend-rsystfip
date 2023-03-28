import { useEffect } from "react";
import DivRow from "../components/DivRow";
import FormUserAdd from "../components/FormUserAdd";
import { ToastContainer } from "react-toastify";

export default function AddUserPage() {
  useEffect(() => {
    document.title = "RSystfip | Register New User";
  }, []);

  return (
    <DivRow>
      <div className="col-md-6 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <h1 className="h3 text-center">Registrar usuario nuevo</h1>
          <FormUserAdd />
        </div>
      </div>
      <ToastContainer />
    </DivRow>
  );
}
