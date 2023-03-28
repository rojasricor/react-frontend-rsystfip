import { useEffect } from "react";
import { Link } from "react-router-dom";
import Rower from "../components/Rower";
import UserLoggedInfo from "../components/UserLoggedInfo";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

export default function HomePage() {
  useEffect(() => {
    document.title = "RSystfip | Home Welcome";
  }, []);

  return (
    <Rower>
      <UserLoggedInfo />
      <div className="form-inline">
        <div className="btn-group btn-group-sm">
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
        </div>
      </div>
    </Rower>
  );
}
