import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import FullCalendarScheduling from "../components/FullCalendarScheduling";

const ProgrammingViewPage = () => {
  useEffect(() => {
    document.title = "RSystfip | View Programming Scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <h1 className="h3 mb-2">Ver agendamientos programados</h1>
      <FullCalendarScheduling
        right="listMonth,dayGridMonth"
        initialView="listMonth"
      />
    </PeopleContextProvider>
  );
};

export default ProgrammingViewPage;
