import { useState, useEffect, useRef } from "react";
import { getStartMonthDate, getEndMonthDate } from "../libs/todaylib";
import { API_ROUTE } from "../constants";
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
import DaterStatistics from "./DaterStatistics";
import Ctx from "./Ctx";
import ListerStatistics from "./ListerStatistics";
import axios from "axios";
import { toast } from "react-toastify";
import { Col } from "react-bootstrap";

const Statistics = ({ scheduling_type }) => {
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

  const refreshChart = (labels, data) => {
    if (chart) chart.destroy();

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
            formatter: (value, { dataset: { data } }) => {
              const percent = Math.round(
                (value / data.reduce((a, b) => Number(a) + Number(b))) * 100
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
  };

  const getStatistics = async () => {
    try {
      const { data } = await axios(
        `${API_ROUTE}/statistics/${scheduling_type}?start=${start}&end=${end}`
      );
      const labels = data.map(({ category }) => category);
      const dataset = data.map(({ scheduling_count }) => scheduling_count);
      refreshChart(labels, dataset);
    } catch (err) {
      toast.error(err);
    }
  };

  const getMostAgendatedOnRange = async () => {
    try {
      const { data } = await axios(
        `${API_ROUTE}/statistics/${scheduling_type}/onrange?start=${start}&end=${end}`
      );
      setMostAgendatedOnRange(data);
    } catch (err) {
      toast.error(err);
    }
  };

  const getMostAgendatedAlltime = async () => {
    try {
      const { data } = await axios(
        `${API_ROUTE}/statistics/${scheduling_type}/alltime`
      );
      setMostAgendatedAlltime(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getStatistics();
    getMostAgendatedOnRange();
    getMostAgendatedAlltime();
  }, [start, end, chartType]);

  return (
    <>
      <Col md={12}>
        <h1 className="h3">
          {`Estadísticas de agendamiento ${
            scheduling_type === "daily" ? "diario" : "programado"
          }`}
        </h1>
      </Col>

      <DaterStatistics
        setStart={setStart}
        start={start}
        setEnd={setEnd}
        end={end}
        setChartType={setChartType}
      />

      <Col md={12} className="my-5">
        <Ctx ctxRef={ctxRef} />
      </Col>

      <Col md={12}>
        <ListerStatistics
          mostAgendatedOnRange={mostAgendatedOnRange}
          mostAgendatedAlltime={mostAgendatedAlltime}
          start={start}
          end={end}
          scheduling_type={
            scheduling_type === "daily" ? "diario" : "programado"
          }
        />
      </Col>
    </>
  );
};

export default Statistics;
