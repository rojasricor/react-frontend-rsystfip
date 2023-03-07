import { NavLink } from "react-router-dom";
import {
  FaUsersCog,
  FaChartArea,
  FaChartLine,
  FaInfoCircle,
} from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { ImUsers, ImUserPlus } from "react-icons/im";
import { IoCalendarNumber } from "react-icons/io5";
import { HiCalendarDays as Events } from "react-icons/all";
import { ProtectedElement } from "./Protected";

export default function NavMenu({ permissions }) {
  return (
    <nav className="pt-4 pt-lg-0">
      <div className="nav nav-fill nav-pills flex-column flex-sm-row ml-2">
        <NavLink to="/home/welcome" className="nav-item nav-link">
          Inicio <TiHome className="mb-1" />
        </NavLink>

        <ProtectedElement isAllowed={permissions.includes("admin")}>
          <NavLink
            to="/users/manage"
            className="nav-item nav-link"
            title="Pánel de administración de usuarios"
          >
            Usuarios <FaUsersCog />
          </NavLink>
        </ProtectedElement>

        <ProtectedElement isAllowed={permissions.includes("schedule")}>
          <NavLink
            to="/people/schedule"
            className="nav-item nav-link"
            title="Agendar una persona en el calendario"
          >
            Programado <IoCalendarNumber className="mb-1" />
          </NavLink>
        </ProtectedElement>

        <ProtectedElement isAllowed={permissions.includes("schedule")}>
          <NavLink
            to="/people/preview"
            className="nav-item nav-link"
            title="Ver agendamientos en el calendario"
          >
            Eventos <Events className="mb-1" />
          </NavLink>
        </ProtectedElement>

        <ProtectedElement isAllowed={permissions.includes("add")}>
          <NavLink
            to="/people/add"
            className="nav-item nav-link"
            title="Agendar una persona inmediatamente"
          >
            Día a Día <ImUserPlus />
          </NavLink>
        </ProtectedElement>

        <NavLink
          to="/people/view"
          className="nav-item nav-link"
          title="Listado de todas las personas agendadas"
        >
          Listado <ImUsers />
        </NavLink>

        <ProtectedElement isAllowed={permissions.includes("reports")}>
          <NavLink
            to="/people/reports"
            className="nav-item nav-link"
            title="Generar reportes"
          >
            <FaChartArea /> Reportes
          </NavLink>
        </ProtectedElement>

        <ProtectedElement isAllowed={permissions.includes("statistics")}>
          <NavLink
            to="/people/statistics"
            className="nav-item nav-link"
            title="Generar estadísticas"
          >
            <FaChartLine /> Estadísticas
          </NavLink>
        </ProtectedElement>

        <NavLink
          to="/help/asks/frecuently"
          className="nav-item nav-link"
          title="Preguntas y respuestas más frecuentes"
        >
          FAQs <FaInfoCircle />
        </NavLink>
      </div>
    </nav>
  );
}
