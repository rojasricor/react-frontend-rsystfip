import { useEffect } from "react";
import DivRow from "../components/DivRow";
import FetcherDataForChangePsw from "../components/FetcherDataForChangePsw";
import Notify from "../components/Notify";

const PswChangeUserPage = () => {
  useEffect(() => {
    document.title = "RSystfip | Change Password Users";
  }, []);

  return (
    <DivRow>
      <FetcherDataForChangePsw />
      <Notify />
    </DivRow>
  );
};

export default PswChangeUserPage;
