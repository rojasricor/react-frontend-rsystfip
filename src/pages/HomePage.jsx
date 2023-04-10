import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rower from "../components/Rower";
import UserLoggedInfo from "../components/UserLoggedInfo";
import BtnGroup from "../components/BtnGroup";

export default function HomePage() {
  useEffect(() => {
    document.title = "RSystfip | Home Welcome";
  }, []);

  return (
    <Rower>
      <UserLoggedInfo />
      <BtnGroup>
        <Link
          to="/people/add"
          className="btn btn-primary"
          title="Agendamiento por día"
        >
          Diario
        </Link>
        <Link
          to="/people/schedule"
          className="btn btn-primary"
          title="Agendamiento programado"
        >
          Programado
        </Link>
      </BtnGroup>
    </Rower>
  );
}
