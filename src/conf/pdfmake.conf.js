export const createHeader = (image, startDate, endDate) => ({
  columns: [
    {
      image,
      width: 70,
      height: 70,
      margin: [23, 14],
      link: "https://www.itfip.edu.co",
    },
    {
      text: `RSystfip / Report between ${startDate} and ${endDate}.`,
      fontSize: 8,
      alignment: "center",
      marginTop: 37,
      marginLeft: -73,
    },
  ],
});

export const footer = (currentPage, pageCount) => ({
  text: `Page ${currentPage}/${pageCount} - RSystfip`,
  alignment: "center",
  fontSize: 8,
  italics: true,
  marginTop: 45,
});

export const styles = {
  header: { fontSize: 18, bold: true, margin: 0 },
  tableHeader: { bold: true, fontSize: 13, color: "black" },
};
