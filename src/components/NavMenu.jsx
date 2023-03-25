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
import { HiListBullet } from "react-icons/all";
import { ProtectedElement } from "./Protected";
import NavDropdown from "./NavDropdown";

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

        <NavDropdown
          title="Sección de agendamientos"
          description="Agendamiento"
          h6="Sección de agendamientos"
        >
          <ProtectedElement isAllowed={permissions.includes("add")}>
            <li>
              <NavLink
                to="/people/add"
                className="nav-item nav-link"
                title="Agendar una persona inmediatamente"
              >
                <ImUserPlus /> Diario
              </NavLink>
            </li>
          </ProtectedElement>

          <ProtectedElement isAllowed={permissions.includes("schedule")}>
            <li>
              <NavLink
                to="/people/schedule"
                className="nav-item nav-link"
                title="Agendar una persona en el calendario"
              >
                <IoCalendarNumber className="mb-1" /> Programado
              </NavLink>
            </li>
          </ProtectedElement>
        </NavDropdown>

        <ProtectedElement isAllowed={permissions.includes("schedule")}>
          <NavLink
            to="/people/preview"
            className="nav-item nav-link"
            title="Ver agendamientos en el calendario"
          >
            Visualizar Eventos <HiListBullet />
          </NavLink>
        </ProtectedElement>

        <ProtectedElement isAllowed={permissions.includes("statistics")}>
          <NavLink
            to="/people/statistics"
            className="nav-item nav-link"
            title="Generar estadísticas"
          >
            Estadísticas <FaChartLine className="mb-1" />
          </NavLink>
        </ProtectedElement>

        <NavDropdown
          title="Sección de reportes"
          description="Reportes e Historial"
          h6="Sección de reportes"
        >
          <li>
            <NavLink
              to="/people/view"
              className="nav-item nav-link"
              title="Listado de todas las personas agendadas"
            >
              <ImUsers /> Historial
            </NavLink>
          </li>

          <ProtectedElement isAllowed={permissions.includes("reports")}>
            <li>
              <NavLink
                to="/people/reports"
                className="nav-item nav-link"
                title="Generar reportes"
              >
                <FaChartArea /> Reportes
              </NavLink>
            </li>
          </ProtectedElement>
        </NavDropdown>

        <NavLink
          to="/help/asks/frecuently"
          className="nav-item nav-link"
          title="Preguntas y respuestas más frecuentes"
        >
          FAQs <FaInfoCircle className="mb-1" />
        </NavLink>
      </div>
    </nav>
  );
}
