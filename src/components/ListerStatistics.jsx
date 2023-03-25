import ListGroup from "./ListGroup";

export default function ListerStatistics({
  mostAgendatedByDate,
  mostAgendatedOfAllTime,
  init,
  start,
  end,
  scheduling_type,
}) {
  return (
    <div className="col-12 mb-5 mt-5">
      <ListGroup
        title={`Agendamiento ${scheduling_type} en el rango de fecha`}
        data={mostAgendatedByDate}
        start={start}
        end={end}
      />

      <ListGroup
        title={`Agendamiento ${scheduling_type} en todas las fechas`}
        data={mostAgendatedOfAllTime}
        start={init}
        end={end}
      />
    </div>
  );
}
