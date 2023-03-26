import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import LoadCalendar from "../components/LoadCalendar";
import { PeopleContextProvider } from "../context/PeopleContext";
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";
import ModalCancellScheduleConfirmation from "../components/ModalCancellScheduleConfirmation";

export default function ScheduleViewPage() {
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
      <ModalCancellScheduleConfirmation />
      <ToastContainer />
    </PeopleContextProvider>
  );
}
