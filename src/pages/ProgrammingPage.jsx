import { useEffect } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";
import ModalSchedulePeopleForm from "../components/ModalSchedulePeopleForm";
import Notify from "../components/Notify";

export default function ProgrammingPage() {
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
      <Notify />
    </PeopleContextProvider>
  );
}
