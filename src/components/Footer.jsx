import ContainerFluid from "./ContainerFluid";
import { FaCodeBranch } from "react-icons/fa";

export default () => (
  <ContainerFluid>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-body-secondary">
        © 2023 Tecnologia en gestion informatica{" "}
        <FaCodeBranch className="mb-1" />
      </p>

      <a
        href="#"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src="/rsystfip.svg" alt="RSystfip" width="40" height="32" />
      </a>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            Inicio
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            FAQs
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            About
          </a>
        </li>
      </ul>
    </footer>
  </ContainerFluid>
);
