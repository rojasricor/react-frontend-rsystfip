import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rower from "../components/Rower";
import UserLoggedInfo from "../components/UserLoggedInfo";
import { FaUserPlus } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";

export default function HomePage() {
  useEffect(() => {
    document.title = "RSystfip | Home Welcome";
  }, []);

  return (
    <Rower>
      <UserLoggedInfo />
      <Link
        to="/people/add"
        className="btn btn-primary m-1"
        title="Agendamiento por día"
      >
        Diario <FaUserPlus className="mb-1" />
      </Link>
      <Link
        to="/people/schedule"
        className="btn btn-primary m-1"
        title="Agendamiento programado"
      >
        Programado <IoCalendarNumber className="mb-1" />
      </Link>
    </Rower>
  );
}
