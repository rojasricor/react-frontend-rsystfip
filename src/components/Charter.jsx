import { useState, useEffect, useRef } from "react";
import { API_ROUTE } from "../utils/constants";
import { getStartMonthDate, getEndMonthDate } from "../utils/resources";
import DivCol12 from "./DivCol12";
import DaterStatistics from "./DaterStatistics";
import Xit from "./Xit";
import ListerStatistics from "./ListerStatistics";
import "chart.js/dist/Chart.bundle.min";

export default function Charter({ scheduling_type }) {
  const [chart, setChart] = useState(null);
  const [init, setInit] = useState("");
  const [start, setStart] = useState(getStartMonthDate());
  const [end, setEnd] = useState(getEndMonthDate());
  const [tyChart, setTyChart] = useState("line");
  const [mostAgendatedByDate, setMostAgendatedByDate] = useState([]);
  const [mostAgendatedOfAllTime, setMostAgendatedOfAllTime] = useState([]);

  const xitRef = useRef(null);

  function refreshChart(labels, data) {
    if (chart) {
      chart.destroy();
    }
    setChart(
      new Chart(xitRef.current, {
        type: tyChart,
        data: {
          labels: labels,
          datasets: [
            {
              label: `Agendamiento ${
                scheduling_type === "daily" ? "diario" : "programado"
              } - Cantidad persona(s)`,
              data,
              backgroundColor: [
                "rgba(255, 165, 0, 0.8)",
                "rgba(121, 85, 72, 0.8)",
                "rgba(33, 33, 33, 0.8)",
                "rgba(0, 0, 0, 0.8)",
                "rgba(50, 50, 50, 0.8)",
              ],
              borderColor: [
                "rgba(255, 165, 0, 1)",
                "rgba(121, 85, 72, 1)",
                "rgba(33, 33, 33, 1)",
                "rgba(0, 0, 0, 1)",
                "rgba(50, 50, 50, 1)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      })
    );
  }

  async function getStatisticsByStartAndEndDate() {
    const request = await fetch(
      `${API_ROUTE}/get/statistics/${scheduling_type}?start=${start}&end=${end}`
    );
    const statisticsData = await request.json();
    const labels = statisticsData.map(({ person }) => person);
    const data = statisticsData.map(({ presence_count }) => presence_count);
    refreshChart(labels, data);
  }

  async function getMostAgendatedInRange() {
    const request = await fetch(
      `${API_ROUTE}/get/statistics/${scheduling_type}/inrange?start=${start}&end=${end}`
    );
    const data = await request.json();
    setMostAgendatedByDate(data);
  }

  async function getMostAgendatedOfAllTime() {
    const request = await fetch(
      `${API_ROUTE}/get/statistics/${scheduling_type}/alltime`
    );
    const data = await request.json();
    const init = data[0].init;
    setMostAgendatedOfAllTime(data);
    setInit(init);
  }

  useEffect(() => {
    getStatisticsByStartAndEndDate();
    getMostAgendatedInRange();
    getMostAgendatedOfAllTime();
  }, [start, end, tyChart]);

  return (
    <>
      <DivCol12>
        <h1 className="h3">
          {`Estadísticas de Agendamiento ${
            scheduling_type === "daily" ? "Diario" : "Programado"
          }`}
        </h1>
        <DaterStatistics
          setStart={setStart}
          start={start}
          setEnd={setEnd}
          end={end}
          setTyChart={setTyChart}
        />
      </DivCol12>

      <Xit xitRef={xitRef} />

      <ListerStatistics
        mostAgendatedByDate={mostAgendatedByDate}
        mostAgendatedOfAllTime={mostAgendatedOfAllTime}
        init={init}
        start={start}
        end={end}
        scheduling_type={scheduling_type === "daily" ? "diario" : "programado"}
      />
    </>
  );
}
