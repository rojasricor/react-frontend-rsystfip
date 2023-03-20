import ListGroup from "./ListGroup";

export default function ListerStatistics({
  mostAgendatedByDate,
  mostAgendatedOfAllTime,
  init,
  start,
  end,
}) {
  return (
    <div className="col-12 mb-5 mt-5">
      <ListGroup
        title="Personas agendadas en el rango de fecha"
        data={mostAgendatedByDate}
        start={start}
        end={end}
      />

      <ListGroup
        title="Personas agendadas en todas las fechas"
        data={mostAgendatedOfAllTime}
        start={init}
        end={end}
      />
    </div>
  );
}
