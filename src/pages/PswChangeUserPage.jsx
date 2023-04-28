import { useEffect } from "react";
import { Row } from "react-bootstrap";
import FetcherDataForChangePsw from "../components/FetcherDataForChangePsw";
import Notify from "../components/Notify";

const PswChangeUserPage = () => {
  useEffect(() => {
    document.title = "RSystfip | Change Password Users";
  }, []);

  return (
    <Row>
      <FetcherDataForChangePsw />
      <Notify />
    </Row>
  );
};

export default PswChangeUserPage;
