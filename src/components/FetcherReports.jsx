import { useState, useEffect } from "react";
import { API_ROUTE } from "../utils/constants";
import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";
import pdfMake from "pdfmake/build/pdfmake.min";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { formatTodaysDateTime } from "../utils/todaylib";
import { BsDownload } from "react-icons/bs";

export default function FetcherReports({
  startDate,
  endDate,
  reportsFiltered,
}) {
  const [people, setPeople] = useState([]);
  const [reportsCountOnRange, setReportsCountOnRange] = useState([]);
  const [reportsCountAlltime, setReportsCountAlltime] = useState([]);

  let institutional_logotype_base_64 = "";
  fetch("/img/admin/avatar.png")
    .then((request) => request.blob())
    .then((response) => {
      const reader = new FileReader();
      reader.readAsDataURL(response);
      reader.addEventListener(
        "load",
        () => (institutional_logotype_base_64 = reader.result)
      );
    });

  function getPeople() {
    fetch(`${API_ROUTE}/people`)
      .then((request) => request.json())
      .then((data) => setPeople(data));
  }

  function getReportsCountOnRange() {
    fetch(`${API_ROUTE}/reports/count?start=${startDate}&end=${endDate}`)
      .then((request) => request.json())
      .then((data) => setReportsCountOnRange(data));
  }

  function getReportsCountAlltime() {
    fetch(`${API_ROUTE}/reports/counts`)
      .then((request) => request.json())
      .then((data) => setReportsCountAlltime(data));
  }

  useEffect(() => {
    getPeople();
    getReportsCountAlltime();
  }, []);

  useEffect(() => {
    getReportsCountOnRange();
  }, [startDate, endDate]);

  function createPdf() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake
      .createPdf({
        pageMargins: [28, 90],
        header: {
          columns: [
            {
              image: institutional_logotype_base_64,
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
        },
        footer: (currentPage, pageCount) => ({
          text: `Page ${currentPage}/${pageCount} - RSystfip`,
          alignment: "center",
          fontSize: 8,
          italics: true,
          marginTop: 45,
        }),
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
                      ({
                        name,
                        date,
                        presence_count,
                        absence_count,
                        person,
                      }) => [name, date, presence_count, absence_count, person]
                    ),
                  ],
                },
              }
            : {},
          {
            text: `Cantidad agendado(a)s entre el rango de fecha:${
              reportsCountOnRange.length !== 0 ? "" : " (0)"
            }`,
            style: "header",
            alignment: "center",
            marginBottom: 30,
            pageBreak: reportsCountOnRange.length !== 0 ? "before" : false,
          },
          reportsCountOnRange.length !== 0
            ? {
                layout: "lightHorizontalLines",
                alignment: "center",
                marginBottom: 30,
                table: {
                  dontBreakRows: true,
                  headerRows: 1,
                  body: [
                    [
                      { text: "Tipo de persona", style: "tableHeader" },
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
          {
            text: `Cantidad total agendado(a)s:${
              reportsCountAlltime.length !== 0 ? "" : " (0)"
            }`,
            style: "header",
            alignment: "center",
            marginBottom: 30,
          },
          reportsCountAlltime.length !== 0
            ? {
                layout: "lightHorizontalLines",
                alignment: "center",
                marginBottom: 30,
                table: {
                  dontBreakRows: true,
                  headerRows: 1,
                  body: [
                    [
                      { text: "Tipo de persona", style: "tableHeader" },
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
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: 0,
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: "black",
          },
        },
      })
      .open();
    // .download(`RSystfip-Report-${formatTodaysDateTime()}.pdf`);
  }

  return (
    <FloatingFormCol12x x="2">
      <button
        onClick={createPdf}
        className="form-control btn btn-light"
        title="Reporte PDF"
      >
        PDF <BsDownload className="mb-1" />
      </button>
      <Label labelInfo="Descargar:" />
    </FloatingFormCol12x>
  );
}
