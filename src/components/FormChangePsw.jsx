import { useState } from "react";
import { toast } from "react-toastify";
import { API_ROUTE } from "../utils/constants";
import DivRow from "./DivRow";
import FloatingFormCol12x from "./FloatingFormCol12x";
import InputPassword from "./InputPassword";
import Submitter from "./Submitter";
import Spinner from "./Spinner";
import { BiKey } from "react-icons/bi";

export default function FormChangePsw({ userId }) {
  const [current_password, setCurrent_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [new_password_confirm, setNew_password_confirm] = useState("");
  const [loading, setLoading] = useState(false);

  async function changePassword(evt) {
    evt.preventDefault();
    setLoading(true);

    try {
      const request = await fetch(`${API_ROUTE}/password`, {
        method: "PUT",
        headers: { "Content-Type": "application/javascript" },
        body: JSON.stringify({
          id: userId,
          current_password,
          new_password,
          new_password_confirm,
        }),
      });
      const { error, ok } = await request.json();
      if (error) {
        return toast.error(error);
      }
      setCurrent_password("");
      setNew_password("");
      setNew_password_confirm("");
      return toast(ok, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={changePassword}>
      <DivRow clAdds=" mt-2">
        <FloatingFormCol12x>
          <InputPassword
            setPassword={setCurrent_password}
            inputValue={current_password}
            placeholder="Current password"
            labelInfo="Contraseña anterior:"
          />
        </FloatingFormCol12x>

        <FloatingFormCol12x>
          {" "}
          <InputPassword
            setPassword={setNew_password}
            inputValue={new_password}
            placeholder="New password"
            labelInfo="Contraseña nueva:"
          />
        </FloatingFormCol12x>

        <FloatingFormCol12x>
          <InputPassword
            setPassword={setNew_password_confirm}
            inputValue={new_password_confirm}
            placeholder="Confirm new password"
            labelInfo="Confirmar contraseña nueva:"
          />
        </FloatingFormCol12x>

        <Submitter loading={loading}>
          {!loading ? (
            <>
              Continuar <BiKey className="mb-1" />
            </>
          ) : (
            <Spinner tam="lg" />
          )}
        </Submitter>
      </DivRow>
    </form>
  );
}
