import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import DivRow from "../components/DivRow";
import GetterPasswordChanger from "../components/GetterPasswordChanger";

export default function PasswordChangerPage() {
  useEffect(() => {
    document.title = "RSystfip | Change Password Users";
  }, []);

  return (
    <DivRow>
      <div className="col-md-4 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <GetterPasswordChanger />
        </div>
      </div>
      <ToastContainer />
    </DivRow>
  );
}
