import { useEffect } from "react";
import DivRow from "../components/DivRow";
import FetcherDataForChangePsw from "../components/FetcherDataForChangePsw";
import Notify from "../components/Notify";

export default function PswChangeUserPage() {
  useEffect(() => {
    document.title = "RSystfip | Change Password Users";
  }, []);

  return (
    <DivRow>
      <FetcherDataForChangePsw />
      <Notify />
    </DivRow>
  );
}
