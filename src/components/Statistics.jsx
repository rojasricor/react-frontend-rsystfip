import { useState, useEffect, useRef } from "react";
import { getStartMonthDate, getEndMonthDate } from "../meta/todaylib";
import { API_ROUTE } from "../constants/api";
import {
  Chart as ChartJS,
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  LineController,
  LineElement,
  LinearScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import DivCol12 from "./DivCol12";
import DaterStatistics from "./DaterStatistics";
import Ctx from "./Ctx";
import ListerStatistics from "./ListerStatistics";

export default function Statistics({ scheduling_type }) {
  const [chart, setChart] = useState(null);
  const [start, setStart] = useState(getStartMonthDate());
  const [end, setEnd] = useState(getEndMonthDate());
  const [chartType, setChartType] = useState("bar");
  const [mostAgendatedOnRange, setMostAgendatedOnRange] = useState([]);
  const [mostAgendatedAlltime, setMostAgendatedAlltime] = useState([]);

  const ctxRef = useRef(null);

  ChartJS.register(
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    ChartDataLabels,
    LinearScale,
    LineController,
    LineElement,
    PieController,
    PointElement,
    PolarAreaController,
    RadialLinearScale,
    Tooltip
  );

  function refreshChart(labels, data) {
    if (chart) {
      chart.destroy();
    }

    const label = `Agendamiento ${
      scheduling_type === "daily" ? "diario" : "programado"
    } - Cantidad persona(s)`;

    const newChart = new ChartJS(ctxRef.current, {
      type: chartType,
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(54, 162, 235)",
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
            hoverOffset: 4,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: { x: { beginAtZero: true }, y: { beginAtZero: true } },
        plugins: {
          datalabels: {
            formatter: (value, { dataset }) => {
              const percent = Math.round(
                (value / dataset.data.reduce((a, b) => Number(a) + Number(b))) *
                  100
              );
              return (isNaN(percent) ? 0 : percent) + "%";
            },
            labels: { title: { font: { size: 20 } } },
            align: "end",
          },
        },
      },
    });

    setChart(newChart);
  }

  async function getStatistics() {
    const request = await fetch(
      `${API_ROUTE}/statistics/${scheduling_type}?start=${start}&end=${end}`
    );
    const statisticsData = await request.json();
    const labels = statisticsData.map(({ person }) => person);
    const data = statisticsData.map(({ scheduling_count }) => scheduling_count);
    refreshChart(labels, data);
  }

  async function getMostAgendatedOnRange() {
    const request = await fetch(
      `${API_ROUTE}/statistics/${scheduling_type}/onrange?start=${start}&end=${end}`
    );
    const data = await request.json();
    setMostAgendatedOnRange(data);
  }

  async function getMostAgendatedAlltime() {
    const request = await fetch(
      `${API_ROUTE}/statistics/${scheduling_type}/alltime`
    );
    const data = await request.json();
    setMostAgendatedAlltime(data);
  }

  useEffect(() => {
    getStatistics();
    getMostAgendatedOnRange();
    getMostAgendatedAlltime();
  }, [start, end, chartType]);

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
          setChartType={setChartType}
        />
      </DivCol12>

      <Ctx ctxRef={ctxRef} />

      <ListerStatistics
        mostAgendatedOnRange={mostAgendatedOnRange}
        mostAgendatedAlltime={mostAgendatedAlltime}
        start={start}
        end={end}
        scheduling_type={scheduling_type === "daily" ? "diario" : "programado"}
      />
    </>
  );
}
