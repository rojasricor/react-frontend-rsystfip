import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function HeaderLogin() {
  const { showPassword } = useContext(AppContext);

  return (
    <div className="text-center mt-2">
      <img
        onClick={showPassword}
        src="/rsystfip.svg"
        width="72"
        height="57"
        alt="rsystfip"
      />
      <h1 className="h6 mt-3">RSYSTFIP</h1>
      <p className="m-5">
        Sóftware para agendamiento de visitas Rectoría - <strong>ITFIP</strong>
      </p>
    </div>
  );
}
