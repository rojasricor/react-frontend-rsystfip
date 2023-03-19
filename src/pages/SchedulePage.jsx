import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { PeopleContextProvider } from "../context/PeopleContext";
import LoadCalendar from "../components/LoadCalendar";
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";
import ModalCancellScheduleConfirmation from "../components/ModalCancellScheduleConfirmation";
import ModalSchedulePeopleForm from "../components/ModalSchedulePeopleForm";

export default function SchedulePage() {
  useEffect(() => {
    document.title = "RSystfip | Programming scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <LoadCalendar />
      <CalendarRSystfipEvents
        right="timeGridDay,timeGridWeek"
        initialView="timeGridDay"
      />
      <ModalCancellScheduleConfirmation />
      <ModalSchedulePeopleForm />
      <ToastContainer />
    </PeopleContextProvider>
  );
}
