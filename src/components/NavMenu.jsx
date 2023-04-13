import { NavLink } from "react-router-dom";
import ProtectedElement from "./ProtectedElement";
import NavDropdown from "./NavDropdown";
import NavLogoutDropdown from "./NavLogoutDropdown";

export default ({ permissions, avatar }) => (
  <div className="collapse navbar-collapse" id="rs-nav">
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <NavLink to="/home/welcome" className="nav-link">
          Inicio
        </NavLink>
      </li>
      <ProtectedElement isAllowed={permissions.includes("admin")}>
        <li className="nav-item">
          <NavLink
            to="/users/manage"
            className="nav-link"
            title="Pánel de administración de usuarios"
          >
            Usuarios
          </NavLink>
        </li>
      </ProtectedElement>
      <NavDropdown title="Sección de agendamientos" description="Agendamiento">
        <ProtectedElement isAllowed={permissions.includes("add")}>
          <NavLink
            to="/people/add"
            className="dropdown-item"
            title="Agendar una persona inmediatamente"
          >
            Agendamiento diario
          </NavLink>
        </ProtectedElement>

        <ProtectedElement isAllowed={permissions.includes("schedule")}>
          <NavLink
            to="/people/schedule"
            className="dropdown-item"
            title="Agendar una persona en el calendario"
          >
            Agend. programado
          </NavLink>
        </ProtectedElement>
      </NavDropdown>
      <ProtectedElement isAllowed={permissions.includes("schedule")}>
        <li className="nav-item">
          <NavLink
            to="/people/preview"
            className="nav-link"
            title="Ver agendamientos en el calendario"
          >
            Ver Eventos
          </NavLink>
        </li>
      </ProtectedElement>
      <ProtectedElement isAllowed={permissions.includes("statistics")}>
        <NavDropdown title="Sección de estadísticas" description="Estadísticas">
          <NavLink
            to="/people/statistics/daily"
            className="dropdown-item"
            title="Generar estadísticas de agendamiento diario"
          >
            Agendamiento diario
          </NavLink>

          <NavLink
            to="/people/statistics/scheduled"
            className="dropdown-item"
            title="Generar estadísticas de agendamiento diario"
          >
            Agend. programado
          </NavLink>
        </NavDropdown>
      </ProtectedElement>
      <NavDropdown
        title="Sección de reportes & historial"
        description="Reportes & Historial"
      >
        <NavLink
          to="/people/view"
          className="dropdown-item"
          title="Listado de todas las personas agendadas"
        >
          Historial personas
        </NavLink>

        <ProtectedElement isAllowed={permissions.includes("reports")}>
          <NavLink
            to="/people/reports"
            className="dropdown-item"
            title="Generar reportes"
          >
            Generar reportes
          </NavLink>
        </ProtectedElement>

        <NavLink
          to="/people/cancelled"
          className="dropdown-item"
          title="Listado de todas las citas canceladas"
        >
          Citas canceladas
        </NavLink>
      </NavDropdown>

      <li className="nav-item">
        <NavLink
          to="/help/asks/frecuently"
          className="nav-link"
          title="Preguntas y respuestas más frecuentes"
        >
          FAQs
        </NavLink>
      </li>
    </ul>
    <NavLogoutDropdown avatar={avatar} />
  </div>
);
