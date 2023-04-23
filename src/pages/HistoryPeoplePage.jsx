import { useEffect } from "react";
import Searcher from "../components/Searcher";

const HistoryPeoplePage = () => {
  useEffect(() => {
    document.title = "RSystfip | Agendated People";
  }, []);

  return <Searcher />;
};

export default HistoryPeoplePage;
