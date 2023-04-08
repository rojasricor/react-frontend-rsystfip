import { useEffect } from "react";
import DivRow from "../components/DivRow";
import FetcherDataForChangePsw from "../components/FetcherDataForChangePsw";
import ToastBase from "../components/ToastBase";

export default function PswChangeUserPage() {
  useEffect(() => {
    document.title = "RSystfip | Change Password Users";
  }, []);

  return (
    <DivRow>
      <FetcherDataForChangePsw />
      <ToastBase />
    </DivRow>
  );
}
