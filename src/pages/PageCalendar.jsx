import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import FullCalendarScheduling from "../components/FullCalendarScheduling";

const PageCalendar = () => {
  useEffect(() => {
    document.title = "Rsystfip | People in calendar";
  }, []);

  return (
    <PeopleContextProvider>
      <h1 className="h3">Ver agendamientos programados</h1>
      <FullCalendarScheduling
        right="listMonth,dayGridMonth"
        initialView="listMonth"
      />
    </PeopleContextProvider>
  );
};

export default PageCalendar;
