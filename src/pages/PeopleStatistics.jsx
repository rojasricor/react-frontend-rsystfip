import { useState, useEffect, useRef } from "react";
import { API_ROUTE } from "../utils/constants";
import { getStartMonthDate, getEndMonthDate } from "../utils/resources";
import "chart.js/dist/Chart.bundle";

export default function PeopleStatistics() {
  useEffect(() => {
    document.title = "RSystfip | Statistics agendated people";
  }, []);

  const [init, setInit] = useState("");
  const [start, setStart] = useState(getStartMonthDate());
  const [end, setEnd] = useState(getEndMonthDate());
  const [tyChart, setTyChart] = useState("line");
  const [chart, setChart] = useState(null);
  const [mostAgendatedByDate, setMostAgendatedByDate] = useState([]);
  const [mostAgendatedOfAllTime, setMostAgendatedOfAllTime] = useState([]);

  const xit = useRef(null);

  function setDataset(label, data) {
    return {
      label,
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
    };
  }

  function refreshChart(labels, data) {
    if (chart) {
      chart.destroy();
    }
    setChart(
      new Chart(xit.current, {
        type: tyChart,
        data: {
          labels: labels,
          datasets: [
            setDataset("Agendamiento programado - Cantidad persona(s)", data),
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
      `${API_ROUTE}/get/statistics?start=${start}&end=${end}`
    );
    const statisticsData = await request.json();
    const labels = statisticsData.map(({ person }) => person);
    const data = statisticsData.map(({ presence_count }) => presence_count);
    refreshChart(labels, data);
  }

  async function getMostAgendatedInRange() {
    const request = await fetch(
      `${API_ROUTE}/get/statistics/inrange?start=${start}&end=${end}`
    );
    const data = await request.json();
    setMostAgendatedByDate(data);
  }

  async function getMostAgendatedOfAllTime() {
    const request = await fetch(`${API_ROUTE}/get/statistics/alltime`);
    const data = await request.json();
    const init = data[0].init;
    setMostAgendatedOfAllTime(data);
    setInit(init);
  }

  function onRangeChange() {
    getStatisticsByStartAndEndDate();
    getMostAgendatedInRange();
    getMostAgendatedOfAllTime();
  }

  useEffect(onRangeChange, [start, end, tyChart]);

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="h3">Estadísticas</h1>
        <div className="row g-3">
          <div className="col-md-2">
            <label className="form-label">Desde:</label>
            <input
              onChange={(evt) => setStart(evt.target.value)}
              type="date"
              value={start}
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Hasta:</label>
            <input
              onChange={(evt) => setEnd(evt.target.value)}
              value={end}
              type="date"
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Gráfica:</label>
            <select
              onChange={(evt) => setTyChart(evt.target.value)}
              value={tyChart}
              className="form-select"
            >
              <option value="line">Línea</option>
              <option value="bar">Barra Vertical</option>
              <option value="horizontalBar">Barra Horizontal</option>
              <option value="radar">Radar</option>
              <option value="polarArea">Polar Area</option>
              <option value="pie">Pie</option>
              <option value="doughnut">Doughnut</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 mb-5">
        <canvas ref={xit} width="500" height="200" />
      </div>
      <div className="col-12 mb-5 mt-5">
        <h5 className="text-center">Personas agendadas en el rango de fecha</h5>
        <div className="list-group w-auto mb-5">
          {mostAgendatedByDate.map((person, index) => {
            return (
              <li
                key={index}
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  className="flex-shrink-0"
                  src="/rsystfip.svg"
                  alt="twbs"
                  width="32"
                  height="27"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">{person.person}</h6>
                    <p className="mb-0 opacity-75">{person.counts}</p>
                  </div>
                  <small className="opacity-50 text-nowrap">
                    {start} - {end}
                  </small>
                </div>
              </li>
            );
          })}
        </div>
        <h5 className="text-center">Personas agendadas en todas las fechas</h5>
        <div className="list-group w-auto">
          {mostAgendatedOfAllTime.map((person, index) => {
            return (
              <li
                key={index}
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  className="flex-shrink-0"
                  src="/rsystfip.svg"
                  alt="twbs"
                  width="32"
                  height="27"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">{person.person}</h6>
                    <p className="mb-0 opacity-75">{person.counts}</p>
                  </div>
                  <small className="opacity-50 text-nowrap">
                    {init} - {end}
                  </small>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
