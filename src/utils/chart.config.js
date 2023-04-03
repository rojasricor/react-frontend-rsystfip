export const backgroundColor = [
  "rgba(255, 165, 0, 0.8)",
  "rgba(121, 85, 72, 0.8)",
  "rgba(33, 33, 33, 0.8)",
  "rgba(0, 0, 0, 0.8)",
  "rgba(50, 50, 50, 0.8)",
];

export const borderColor = [
  "rgba(255, 165, 0, 1)",
  "rgba(121, 85, 72, 1)",
  "rgba(33, 33, 33, 1)",
  "rgba(0, 0, 0, 1)",
  "rgba(50, 50, 50, 1)",
];

export const setDataset = (label, data) => [
  { label, data, backgroundColor, borderColor, borderWidth: 2 },
];

export const options = {
  scales: {
    yAxes: [{ ticks: { beginAtZero: true } }],
    xAxes: [{ ticks: { beginAtZero: true } }],
  },
};

export const setData = (label, labels, data) => ({
  labels,
  datasets: setDataset(label, data),
});

export const createChart = (type, label, labels, data) => ({
  type,
  data: setData(label, labels, data),
  options,
});
