import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";

export default function ProgrammingViewPage() {
  useEffect(() => {
    document.title = "RSystfip | View Programming Scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <CalendarRSystfipEvents
        right="listMonth,dayGridMonth"
        initialView="listMonth"
      />
    </PeopleContextProvider>
  );
}
