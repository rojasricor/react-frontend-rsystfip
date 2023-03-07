import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";
import FullCalendar from "@fullcalendar/react";
import daygrid from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import { formatTodaysDate, formatTodaysDateTime } from "../utils/resources";
import { globalLocales } from "fullcalendar";
import { API_ROUTE } from "../utils/constants";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import { toast } from "react-toastify";

export default function CalendarRSystfipEvents({ right, initialView }) {
  const { loadEventsRef, setEventId, setDate, setStart, setEnd, setStatus } =
    useContext(PeopleContext);

  return (
    <div className="table-responsive">
      <div className="container-fluid schg-sm lh-1">
        <FullCalendar
          height="auto"
          headerToolbar={{
            left: "prevYear,prev,next,nextYear today",
            center: "title",
            right,
          }}
          locales={[esLocale, globalLocales]}
          locale="es-us"
          navLinks
          nowIndicator
          dayHeaders
          weekends
          dayHeaderFormat={{
            weekday: "long",
          }}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: "06:00",
            endTime: "22:00",
          }}
          weekNumbers
          weekNumberCalculation="ISO"
          selectable
          selectMirror
          select={(selectInfo) => {
            if ("dayGridMonth" === selectInfo.view.type) {
              return;
            }

            const modalScheduling = new bootstrap.Modal("#modal-scheduling");
            modalScheduling.show();

            setDate(formatTodaysDate(selectInfo.start));
            setStart(formatTodaysDateTime(selectInfo.start));
            setEnd(formatTodaysDateTime(selectInfo.end));
            setStatus(1);
          }}
          eventClick={(selectInfo) => {
            const modalCancelSheduling = new bootstrap.Modal(
              "#modal-confirm-cancell"
            );
            modalCancelSheduling.show();
            setEventId(selectInfo.event.id);
            setDate(formatTodaysDateTime(selectInfo.event.start));
          }}
          editable
          dayMaxEvents
          events={{
            url: `${API_ROUTE}/get/events/scheduling`,
            failure: () =>
              toast.error("No se pudo hacer la carga de los eventos."),
          }}
          eventOrder="-start"
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
          }}
          loading={(sisas) =>
            (loadEventsRef.current.style.display = sisas ? "block" : "none")
          }
          plugins={[daygrid]}
          initialView={initialView}
        />
      </div>
      <p className="text-center mt-2">Agendamiento programado mes a mes.</p>
    </div>
  );
}
