export const getStartMonthDate = (d = new Date()) =>
  formatTodaysDate(new Date(d.getFullYear(), d.getMonth(), 1));

export const getEndMonthDate = (d = new Date()) =>
  formatTodaysDate(new Date(d.getFullYear(), d.getMonth() + 1, 0));

export const formatTodaysDate = (d = new Date()) => {
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${d.getFullYear()}-${(month < 10 ? "0" : "").concat(month)}-${(day <
  10
    ? "0"
    : ""
  ).concat(day)}`;
};

export const getTime = (d = new Date()) => {
  const h = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
  const m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
  const s = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
  return `${h}:${m}:${s}`;
};

export const formatTodaysDateTime = (date) =>
  formatTodaysDate(date) + " " + getTime(date);
