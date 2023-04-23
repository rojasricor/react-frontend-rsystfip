import { Link } from "react-router-dom";
import ContainerFluid from "./ContainerFluid";
import { FaCodeBranch } from "react-icons/fa";

const Footer = () => (
  <ContainerFluid>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">
        © 2023 Tecnología en gestión informatica
        <FaCodeBranch className="mb-1" />
      </p>

      <a
        href="#"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src="/rsystfip.svg" alt="RSystfip" width="40" height="32" />
      </a>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link
            to="/home/welcome"
            className="nav-link px-2 text-body-secondary"
          >
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/help/asks/frecuently"
            className="nav-link px-2 text-body-secondary"
          >
            FAQs
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Acerca de
          </a>
        </li>
      </ul>
    </footer>
  </ContainerFluid>
);

export default Footer;
