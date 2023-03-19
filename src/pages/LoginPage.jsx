import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  useEffect(() => {
    document.title = "RSystfip | Auth";
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="card card-body border border rounded-5">
          <LoginHeader />
          <LoginForm />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
