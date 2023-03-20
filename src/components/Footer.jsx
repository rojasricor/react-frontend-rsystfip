import { SiInformatica } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="px-3 py-2 fixed-bottom bg-dark">
      <span className="text-secondary">
        Sistema de Agendamiento
        <span className="text-white">&nbsp;RSystfip</span>
        &nbsp;|&nbsp;
        <span className="text-white">
          Tecnología en Gestión Informatica <SiInformatica className="mb-1" />
        </span>
      </span>
    </footer>
  );
}
