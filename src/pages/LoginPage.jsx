import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import DivRow from "../components/DivRow";
import HeaderLogin from "../components/HeaderLogin";
import FormLogin from "../components/FormLogin";

export default function LoginPage() {
  useEffect(() => {
    document.title = "RSystfip | Auth";
  }, []);

  return (
    <DivRow>
      <div className="col-md-4 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <HeaderLogin />
          <FormLogin />
        </div>
      </div>
      <ToastContainer />
    </DivRow>
  );
}
