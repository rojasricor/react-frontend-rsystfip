import { useEffect } from "react";
import DivRow from "../components/DivRow";
import FetcherDataForChangePsw from "../components/FetcherDataForChangePsw";
import { ToastContainer } from "react-toastify";

export default function PswChangeUserPage() {
  useEffect(() => {
    document.title = "RSystfip | Change Password Users";
  }, []);

  return (
    <DivRow>
      <FetcherDataForChangePsw />
      <ToastContainer />
    </DivRow>
  );
}
