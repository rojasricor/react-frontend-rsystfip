export function getStartMonthDate() {
  const d = new Date();
  return formatTodaysDate(new Date(d.getFullYear(), d.getMonth(), 1));
}

export function getEndMonthDate() {
  const d = new Date();
  return formatTodaysDate(new Date(d.getFullYear(), d.getMonth() + 1, 0));
}

export function formatTodaysDate(d = new Date()) {
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${d.getFullYear()}-${(month < 10 ? "0" : "").concat(month)}-${(day <
  10
    ? "0"
    : ""
  ).concat(day)}`;
}

export function getTime(d = new Date()) {
  const h = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
  const m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
  const s = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
  return `${h}:${m}:${s}`;
}

export function formatTodaysDateTime(date) {
  return formatTodaysDate(date) + " " + getTime(date);
}
