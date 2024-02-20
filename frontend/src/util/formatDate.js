export const getDate = (dateString) => {
  if (dateString === undefined) return "";
  return dateString.slice(0, 10);
};

export const formatDate = (dateString) => {
  const day = dateString.slice(8, 10);
  const month = dateString.slice(5, 7);
  const year = dateString.slice(0, 4);

  return `${day}/${month}/${year}`;
};
