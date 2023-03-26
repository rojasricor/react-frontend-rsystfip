import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { PeopleContextProvider } from "../context/PeopleContext";
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";
import ModalSchedulePeopleForm from "../components/ModalSchedulePeopleForm";

export default function SchedulePage() {
  useEffect(() => {
    document.title = "RSystfip | Programming Scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <CalendarRSystfipEvents
        right="timeGridDay,timeGridWeek"
        initialView="timeGridDay"
      />
      <ModalSchedulePeopleForm />
      <ToastContainer />
    </PeopleContextProvider>
  );
}
