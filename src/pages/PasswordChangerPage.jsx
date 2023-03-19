import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import GetterPasswordChanger from "../components/GetterPasswordChanger";

export default function PasswordChangerPage() {
  useEffect(() => {
    document.title = "RSystfip | Change password users";
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="card card-body">
          <GetterPasswordChanger />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
