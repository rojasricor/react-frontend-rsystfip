import { useEffect } from "react";
import DivRow from "../components/DivRow";
import Cardx from "../components/Cardx";
import HeaderLogin from "../components/HeaderLogin";
import Container from "../components/Container";
import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";

export default function LoginPage() {
  useEffect(() => {
    document.title = "RSystfip | Auth";
  }, []);

  return (
    <DivRow>
      <Cardx x="4">
        <HeaderLogin />
        <Container>
          <FormLogin />
        </Container>
      </Cardx>
      <ToastContainer />
    </DivRow>
  );
}
