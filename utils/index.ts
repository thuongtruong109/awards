export const formatCertName = (name: string) => {
  return name.replace(/ /g, "_").toLowerCase();
};

export const obj2Arr = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

export const formatDate = (inputDate: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateParts = inputDate.split("-");
  const year = dateParts[0];
  const monthIndex = parseInt(dateParts[1], 10) - 1;
  const day = dateParts[2];
  const monthName = months[monthIndex];

  return `${monthName} ${parseInt(day, 10)}, ${year}`;
};
