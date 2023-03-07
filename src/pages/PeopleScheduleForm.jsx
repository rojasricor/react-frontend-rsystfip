import { useEffect, lazy, Suspense } from "react";
import { PeopleContextProvider } from "../context/PeopleContext";
import LoaderSuspense from "../components/LoaderSuspense";
const LoadCalendar = lazy(() => import("../components/LoadCalendar"));
import CalendarRSystfipEvents from "../components/CalendarRSystfipEvents";
const ModalCancellScheduleConfirmation = lazy(() =>
  import("../components/ModalCancellScheduleConfirmation")
);
const ModalSchedulePeopleForm = lazy(() =>
  import("../components/ModalSchedulePeopleForm")
);
import { ToastContainer } from "react-toastify";

export default function PeopleScheduleForm() {
  useEffect(() => {
    document.title = "RSystfip | Programming scheduling";
  }, []);

  return (
    <PeopleContextProvider>
      <ToastContainer />
      <LoadCalendar />
      <CalendarRSystfipEvents
        right="timeGridDay,timeGridWeek"
        initialView="timeGridDay"
      />
      <Suspense fallback={<LoaderSuspense />}>
        <ModalCancellScheduleConfirmation />
        <ModalSchedulePeopleForm />
      </Suspense>
    </PeopleContextProvider>
  );
}
