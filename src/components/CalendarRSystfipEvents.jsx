import { useContext, useRef } from "react";
import { PeopleContext } from "../context/PeopleContext";
import Responsive from "./Responsive";
import Container from "./Container";
import LoadCalendar from "../components/LoadCalendar";
import FullCalendar from "@fullcalendar/react";
import daygrid from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import { formatTodaysDate, formatTodaysDateTime } from "../meta/todaylib";
import { globalLocales } from "fullcalendar";
import { API_ROUTE } from "../constants/api";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
import { toast } from "react-toastify";

export default function CalendarRSystfipEvents({ right, initialView }) {
  const { setEventId, setDate, setStart, setEnd, setStatus } =
    useContext(PeopleContext);

  const loadEventsRef = useRef(null);

  return (
    <Responsive>
      <LoadCalendar loadEventsRef={loadEventsRef} />
      <Container clAdds=" schg-sm lh-1">
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
            day: "numeric",
          }}
          businessHours={{
            daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
            startTime: "06:00",
            endTime: "22:00",
          }}
          weekNumbers
          weekNumberCalculation="ISO"
          selectable
          selectMirror
          select={({ view, start, end }) => {
            if ("dayGridMonth" === view.type) {
              return;
            }

            const now = new Date();
            if (start < now) {
              view.calendar.unselect();
              return alert(
                "No se puede agendar en una fecha que ya ha pasado."
              );
            }

            if (
              start.getHours() < 6 ||
              end.getHours() > 21 ||
              end.getHours() === 0
            ) {
              // The selection is out of allow range, cancel
              view.calendar.unselect();
              return alert("Agendamientos no disponible en ese horario.");
            }

            const modalScheduling = new bootstrap.Modal("#modal-scheduling");
            modalScheduling.show();

            setDate(formatTodaysDate(start));
            setStart(formatTodaysDateTime(start));
            setEnd(formatTodaysDateTime(end));
            setStatus(1);
          }}
          eventClick={({ event }) => {
            const modalCancelSheduling = new bootstrap.Modal(
              "#modal-confirm-cancell"
            );
            modalCancelSheduling.show();
            setEventId(event.id);
            setDate(formatTodaysDateTime(event.start));
          }}
          editable
          dayMaxEvents
          events={{
            url: `${API_ROUTE}/scheduling`,
            failure: () =>
              toast.error("No se pudo hacer la carga de los eventos 🤯"),
          }}
          eventOrder="-start"
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
          }}
          loading={(state) =>
            (loadEventsRef.current.style.display = state ? "block" : "none")
          }
          plugins={[daygrid]}
          initialView={initialView}
        />
      </Container>
      <p className="text-center mt-2">Scheduled scheduling month to month.</p>
    </Responsive>
  );
}
