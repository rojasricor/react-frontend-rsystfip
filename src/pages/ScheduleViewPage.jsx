import { useEffect } from "react";
import LoadCalendar from "../components/LoadCalendar";
import { PeopleContextProvider } from "../context/PeopleContext";
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";

export default function ScheduleViewPage() {
  useEffect(() => {
    document.title = "RSystfip | View Programming scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <LoadCalendar />
      <CalendarRSystfipEvents
        right="listMonth,dayGridMonth"
        initialView="listMonth"
      />
    </PeopleContextProvider>
  );
}
