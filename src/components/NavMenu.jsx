import { NavLink } from "react-router-dom";
import ProtectedElement from "./ProtectedElement";
import NavDropdown from "./NavDropdown";
import { FaUsersCog, FaInfoCircle } from "react-icons/fa";
import { BsFilePdf } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import { ImUsers, ImUserPlus } from "react-icons/im";
import { IoCalendarNumber } from "react-icons/io5";
import { HiListBullet } from "react-icons/hi2";

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
                Agend. diario <ImUserPlus />
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
                Agend. programado <IoCalendarNumber className="mb-1" />
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
          <NavDropdown
            title="Sección de estadísticas"
            description="Estadísticas"
            h6="Sección de estadísticas"
          >
            <li>
              <NavLink
                to="/people/statistics/daily"
                className="nav-item nav-link"
                title="Generar estadísticas de agendamiento diario"
              >
                Agend. diario <ImUserPlus />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/people/statistics/scheduled"
                className="nav-item nav-link"
                title="Generar estadísticas de agendamiento diario"
              >
                Agend. programado <IoCalendarNumber className="mb-1" />
              </NavLink>
            </li>
          </NavDropdown>
        </ProtectedElement>

        <NavDropdown
          title="Sección de reportes & historial"
          description="Reportes & Historial"
          h6="Sección de reportes & historial"
        >
          <li>
            <NavLink
              to="/people/view"
              className="nav-item nav-link"
              title="Listado de todas las personas agendadas"
            >
              Historial personas <ImUsers />
            </NavLink>
          </li>

          <ProtectedElement isAllowed={permissions.includes("reports")}>
            <li>
              <NavLink
                to="/people/reports"
                className="nav-item nav-link"
                title="Generar reportes"
              >
                Generar reportes <BsFilePdf />
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
