import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import FullCalendarScheduling from "../components/FullCalendarScheduling";

const PageProgramming = () => {
  useEffect(() => {
    document.title = "Rsystfip | Programming scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <h1 className="h3">Agendamiento programado</h1>
      <FullCalendarScheduling
        right="timeGridDay,timeGridWeek"
        initialView="timeGridDay"
      />
    </PeopleContextProvider>
  );
};

export default PageProgramming;
