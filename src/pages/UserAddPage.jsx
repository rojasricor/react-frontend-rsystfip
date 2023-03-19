import { ToastContainer } from "react-toastify";
import FormUserAdd from "../components/FormUserAdd";

export default function UserAddPage() {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card card-body">
          <h1 className="h3 text-center">Registrar usuario nuevo</h1>
          <FormUserAdd />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
