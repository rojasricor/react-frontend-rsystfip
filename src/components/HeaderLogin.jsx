import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Container, Image, Card } from "react-bootstrap";

const HeaderLogin = () => {
  const { passwordVisible, setPasswordVisible } = useContext(AppContext);

  return (
    <Container className="text-center mt-2">
      <Image
        onClick={() => setPasswordVisible(!passwordVisible)}
        src="/rsystfip.svg"
        width="72"
        height="57"
        alt="rsystfip"
      />
      <h1 className="h6 mt-3">RSYSTFIP</h1>
      <Card className="m-5">
        <Card.Body>
          <Card.Text>
            Sóftware para agendamiento de visitas Rectoría -{" "}
            <strong>ITFIP</strong>
          </Card.Text>
          <Image
            src="/img/admin/avatar.png"
            height="55"
            width="55"
            alt="itfip"
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HeaderLogin;
