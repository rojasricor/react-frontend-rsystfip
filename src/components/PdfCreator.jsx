import Downloader from "./Downloader";
import pdfMake from "pdfmake/build/pdfmake.min";
import { createHeader, footer, styles, myFonts } from "../conf/pdfmake.conf";

export default function PdfCreator({
  image,
  startDate,
  endDate,
  people,
  reportsFiltered,
  reportsCountOnRange,
  reportsCountAlltime,
}) {
  const pdf = pdfMake.createPdf({
    pageMargins: [28, 90],
    header: createHeader(image, startDate, endDate),
    footer,
    content: [
      {
        text: `Total personas agendadas: (${people.length})`,
        style: "header",
        alignment: "center",
        marginBottom: 30,
      },
      people.length !== 0
        ? {
            layout: "lightHorizontalLines",
            alignment: "center",
            table: {
              dontBreakRows: true,
              headerRows: 1,
              body: [
                [
                  { text: "No.", style: "tableHeader" },
                  { text: "Nombre completo", style: "tableHeader" },
                  { text: "Categoría", style: "tableHeader" },
                  { text: "Facultad", style: "tableHeader" },
                  {
                    text: "Asunto visita rectoría",
                    style: "tableHeader",
                  },
                ],
                ...people.map(({ id, name, person, fac, text_asunt }) => [
                  id,
                  name,
                  person,
                  fac,
                  text_asunt,
                ]),
              ],
            },
          }
        : {},
      {
        text: `Reportes entre el rango de fecha: (${reportsFiltered.length})`,
        style: "header",
        alignment: "center",
        marginBottom: 30,
        pageBreak: "before",
      },
      reportsFiltered.length !== 0
        ? {
            layout: "lightHorizontalLines",
            alignment: "center",
            table: {
              dontBreakRows: true,
              headerRows: 1,
              body: [
                [
                  { text: "Nombre completo", style: "tableHeader" },
                  {
                    text: "Fecha y hora agendamiento",
                    style: "tableHeader",
                  },
                  { text: "Agendamiento diario", style: "tableHeader" },
                  { text: "Agendamiento programado", style: "tableHeader" },
                  { text: "Cetegoría persona", style: "tableHeader" },
                ],
                ...reportsFiltered.map(
                  ({ name, date, scheduling_count, daily_count, person }) => [
                    name,
                    date,
                    scheduling_count,
                    daily_count,
                    person,
                  ]
                ),
              ],
            },
          }
        : {},
      {
        text: "Cantidad agendado(a)s:",
        style: "header",
        alignment: "center",
        marginBottom: 30,
        pageBreak: reportsFiltered.length !== 0 ? "before" : false,
      },
      {
        columns: [
          {
            text: `Rango de fecha${
              reportsCountOnRange.length !== 0 ? "" : " (0)"
            }`,
            style: "subheader",
            alignment: "center",
            marginBottom: 10,
          },
          {
            text: `Cantidad total${
              reportsCountAlltime.length !== 0 ? "" : " (0)"
            }`,
            style: "subheader",
            alignment: "center",
            marginBottom: 10,
          },
        ],
      },
      {
        columns: [
          reportsCountOnRange.length !== 0
            ? {
                layout: "headerLineOnly",
                alignment: "center",
                marginBottom: 30,
                style: "grayColor",
                table: {
                  dontBreakRows: true,
                  headerRows: 1,
                  body: [
                    [
                      { text: "Categoría de persona", style: "tableHeader" },
                      { text: "Cantidad personas", style: "tableHeader" },
                    ],
                    ...reportsCountOnRange.map(({ person, counts }) => [
                      person,
                      counts,
                    ]),
                  ],
                },
              }
            : {},
          reportsCountAlltime.length !== 0
            ? {
                layout: "headerLineOnly",
                alignment: "center",
                marginBottom: 30,
                style: "grayColor",
                table: {
                  dontBreakRows: true,
                  headerRows: 1,
                  body: [
                    [
                      { text: "Categoría de persona", style: "tableHeader" },
                      { text: "Cantidad personas", style: "tableHeader" },
                    ],
                    ...reportsCountAlltime.map(({ person, counts }) => [
                      person,
                      counts,
                    ]),
                  ],
                },
              }
            : {},
        ],
      },
    ],
    styles,
  });

  pdf.fonts = myFonts;

  return <Downloader pdf={pdf} />;
}
