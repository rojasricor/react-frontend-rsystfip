import Listgroup from "./Listgroup";

const ListerStatistics = ({
  mostAgendatedOnRange,
  mostAgendatedAlltime,
  start,
  end,
  scheduling_type,
}) => (
  <>
    <Listgroup
      title={`Agendamiento ${scheduling_type} en el rango de fecha`}
      data={mostAgendatedOnRange}
      start={start}
      end={end}
    />

    <Listgroup
      title={`Agendamiento ${scheduling_type} en todas las fechas`}
      data={mostAgendatedAlltime}
      end={end}
    />
  </>
);

export default ListerStatistics;
