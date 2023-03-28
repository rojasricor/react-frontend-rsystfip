import { useEffect } from "react";
import Rower from "../components/Rower";
import Searcher from "../components/Searcher";

export default function ViewsPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Agendated People";
  }, []);

  return (
    <Rower>
      <h1 className="h3">Personas Agendadas</h1>
      <Searcher />
    </Rower>
  );
}
