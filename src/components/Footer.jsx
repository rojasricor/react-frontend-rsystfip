import { BiCodeAlt } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="px-3 py-2 fixed-bottom bg-dark">
      <span className="text-secondary">
        Sistema de Agendamiento
        <span className="text-white">&nbsp;RSystfip</span>
        &nbsp;|&nbsp;
        <span className="text-white">
          Técnica Profesional en Programación Web <BiCodeAlt />
        </span>
      </span>
    </footer>
  );
}
