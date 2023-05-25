import { useEffect } from "react";
import { Row } from "react-bootstrap";
import RecoveryPassword from "../components/RecoveryPassword";
import Notify from "../components/Notify";

const PageRecoveryPassword = () => {
  useEffect(() => {
    document.title = "Rsystfip | I forget my password";
  }, []);

  return (
    <Row>
      <RecoveryPassword />
      <Notify />
    </Row>
  );
};

export default PageRecoveryPassword;
