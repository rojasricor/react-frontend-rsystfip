import { useEffect } from "react";
import DivCol12 from "../components/DivCol12";
import Searcher from "../components/Searcher";

export default function ViewsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Agendated People";
  }, []);

  return (
    <div className="row">
      <DivCol12>
        <h1 className="h3">Personas Agendadas</h1>
        <Searcher />
      </DivCol12>
    </div>
  );
}
