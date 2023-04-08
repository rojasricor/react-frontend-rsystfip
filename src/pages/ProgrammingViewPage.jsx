import { useEffect } from "react";
import LoadCalendar from "../components/LoadCalendar";
import { PeopleContextProvider } from "../context/PeopleContext";
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";
import ModalCancellPersonConfirmation from "../components/ModalCancellPersonConfirmation";
import ToastBase from "../components/ToastBase";

export default function ProgrammingViewPage() {
  useEffect(() => {
    document.title = "RSystfip | View Programming Scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <LoadCalendar />
      <CalendarRSystfipEvents
        right="listMonth,dayGridMonth"
        initialView="listMonth"
      />
      <ModalCancellPersonConfirmation />
      <ToastBase />
    </PeopleContextProvider>
  );
}
