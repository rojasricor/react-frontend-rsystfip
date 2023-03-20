import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import FormUserAdd from "../components/FormUserAdd";

export default function AddUserPage() {
  useEffect(() => {
    document.title = "RSystfip | Register new user";
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <h1 className="h3 text-center">Registrar usuario nuevo</h1>
          <FormUserAdd />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
