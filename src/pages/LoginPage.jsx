import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { API_ROUTE } from "../utils/constants";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { doLogin } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "RSystfip | Auth";
  }, []);

  async function authenticate(evt) {
    evt.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_ROUTE}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const { auth, user, error } = await response.json();

      if (auth) {
        doLogin(user);
        navigate("/home/welcome");
      } else {
        toast.error(error);
      }
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="card card-body border border rounded-5">
          <LoginHeader
            togglePassword={() => setPasswordVisible(!passwordVisible)}
          />
          <LoginForm
            authenticate={authenticate}
            setUsername={setUsername}
            username={username}
            setPassword={setPassword}
            password={password}
            passwordVisible={passwordVisible}
            loading={loading}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
