import DivCol12 from "./DivCol12";
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
    <DivCol12 x="12 my-5">
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
    </DivCol12>
  );
}
