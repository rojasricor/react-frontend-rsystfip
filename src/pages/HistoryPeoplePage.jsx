import { useEffect } from "react";
import Searcher from "../components/Searcher";

export default function HistoryPeoplePage() {
  useEffect(() => {
    document.title = "RSystfip | Agendated People";
  }, []);

  return <Searcher />;
}
