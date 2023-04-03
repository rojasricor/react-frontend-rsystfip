import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rower from "../components/Rower";
import UserLoggedInfo from "../components/UserLoggedInfo";
import BtnGroup from "../components/BtnGroup";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

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
          className="btn btn-fc-primary"
          title="Agendamiento por día"
        >
          <ImUserPlus />
        </Link>
        <Link
          to="/people/schedule"
          className="btn btn-fc-primary"
          title="Agendamiento programado"
        >
          <IoCalendarNumber />
        </Link>
      </BtnGroup>
    </Rower>
  );
}
