import { useState } from "react";
import { toast } from "react-toastify";
import { API_ROUTE } from "../constants/api";
import DivRow from "./DivRow";
import InputPassword from "./InputPassword";
import Submitter from "./Submitter";
import Spinner from "./Spinner";
import { BiKey } from "react-icons/bi";

export default function FormChangePsw({ userId }) {
  const [current_password, setCurrent_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [new_password_confirm, setNew_password_confirm] = useState("");
  const [loading, setLoading] = useState(false);

  async function doChangePassword(evt) {
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
        return toast.warn(error);
      }

      setCurrent_password("");
      setNew_password("");
      setNew_password_confirm("");
      toast.success(ok, { position: "top-left" });
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={doChangePassword}>
      <DivRow clAdds=" mt-2">
        <InputPassword
          setPassword={setCurrent_password}
          inputValue={current_password}
          placeholder="Current password"
          labelInfo="Contraseña anterior:"
        />

        <InputPassword
          setPassword={setNew_password}
          inputValue={new_password}
          placeholder="New password"
          labelInfo="Contraseña nueva:"
        />

        <InputPassword
          setPassword={setNew_password_confirm}
          inputValue={new_password_confirm}
          placeholder="Confirm new password"
          labelInfo="Confirmar contraseña nueva:"
        />

        <Submitter loading={loading}>
          {!loading ? (
            <>
              Cambiar <BiKey className="mb-1" />
            </>
          ) : (
            <Spinner tam="lg" />
          )}
        </Submitter>
      </DivRow>
    </form>
  );
}
