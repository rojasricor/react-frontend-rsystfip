import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { IoCalendarNumber } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

export default function Home() {
  const { user } = useContext(AppContext);

  useEffect(() => {
    document.title = "RSystfip | Home welcome";
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="h3">
          {(user.role === "secretaria" ? "Bienvenida" : "Bienvenido").concat(
            ` ${user.role}: ${user.name}`
          )}
        </h1>
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
      </div>
    </div>
  );
}
