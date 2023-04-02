import { useEffect } from "react";
import DivRow from "../components/DivRow";
import GetterDataForChangePsw from "../components/GetterDataForChangePsw";
import { ToastContainer } from "react-toastify";

export default function PswChangeUserPage() {
  useEffect(() => {
    document.title = "RSystfip | Change Password Users";
  }, []);

  return (
    <DivRow>
      <div className="col-md-4 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <GetterDataForChangePsw />
        </div>
      </div>
      <ToastContainer />
    </DivRow>
  );
}
