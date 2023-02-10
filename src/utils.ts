export const MONTHS = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getMonthName = (monthNumber: string | number) => {
  const monthNum = Number(monthNumber);
  if (isNaN(monthNum)) {
    return monthNumber;
  }
  return MONTHS[monthNum - 1];
};

export const digitDateToString = (date: string) => {
  const [day, month, year] = date.split("-").reverse();
  return `${getMonthName(month)} ${day}, ${year}`;
};

export const createDebounce = () => {
  let timeout: any = null;
  return function (fnc: any, delayMs: number) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs || 500);
  };
};
