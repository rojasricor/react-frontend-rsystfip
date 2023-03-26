import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { PeopleContextProvider } from "../context/PeopleContext";
import LoadCalendar from "../components/LoadCalendar";
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";
import ModalSchedulePeopleForm from "../components/ModalSchedulePeopleForm";

export default function SchedulePage() {
  useEffect(() => {
    document.title = "RSystfip | Programming Scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <LoadCalendar />
      <CalendarRSystfipEvents
        right="timeGridDay,timeGridWeek"
        initialView="timeGridDay"
      />
      <ModalSchedulePeopleForm />
      <ToastContainer />
    </PeopleContextProvider>
  );
}
