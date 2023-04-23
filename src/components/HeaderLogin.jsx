import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const HeaderLogin = () => {
  const { passwordVisible, setPasswordVisible } = useContext(AppContext);

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
      <div className="m-5">
        Sóftware para agendamiento de visitas Rectoría - <strong>ITFIP</strong>
        <p>
          <img src="/img/admin/avatar.png" height="55" width="55" alt="itfip" />
        </p>
      </div>
    </div>
  );
};

export default HeaderLogin;
