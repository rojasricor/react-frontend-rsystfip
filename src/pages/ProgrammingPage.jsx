import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import FullCalendarScheduling from "../components/FullCalendarScheduling";

export default function ProgrammingPage() {
  useEffect(() => {
    document.title = "RSystfip | Programming Scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <FullCalendarScheduling
        right="timeGridDay,timeGridWeek"
        initialView="timeGridDay"
      />
    </PeopleContextProvider>
  );
}
