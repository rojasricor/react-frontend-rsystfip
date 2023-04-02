import { useEffect } from "react";
import DivRow from "../components/DivRow";
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
      <div className="col-md-4 mx-auto">
        <div className="card card-body border-0 rounded-4 shadow">
          <HeaderLogin />
          <Container>
            <FormLogin />
          </Container>
        </div>
      </div>
      <ToastContainer />
    </DivRow>
  );
}
