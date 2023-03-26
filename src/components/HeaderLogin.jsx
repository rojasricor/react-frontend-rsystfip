import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function LoginHeader() {
  const { setPasswordVisible, passwordVisible } = useContext(AppContext);

  return (
    <div className="text-center mt-2">
      <img
        onClick={() => setPasswordVisible(!passwordVisible)}
        src="/rsystfip.svg"
        width="72"
        height="57"
        alt="rsystfip"
      />
      <h1 className="h6 mt-3">RSYSTFIP</h1>
      <span>
        Sóftware para agendamiento de visitas Rectoría - <strong>ITFIP</strong>
      </span>
      <p className="text-muted">
        Instituto Tolimense De Formación Técnica Profesional ; NIT:
        800.173.719.0. Calle 18 Carrera 1ª Barrio/Arkabal Espinal, Tolima -
        Colombia
      </p>
    </div>
  );
}
