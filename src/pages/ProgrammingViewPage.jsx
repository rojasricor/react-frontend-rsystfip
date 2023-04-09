import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import FullCalendarScheduling from "../components/FullCalendarScheduling";

export default function ProgrammingViewPage() {
  useEffect(() => {
    document.title = "RSystfip | View Programming Scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <FullCalendarScheduling
        right="listMonth,dayGridMonth"
        initialView="listMonth"
      />
    </PeopleContextProvider>
  );
}
