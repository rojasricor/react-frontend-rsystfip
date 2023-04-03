import { useState, useEffect } from "react";
import { API_ROUTE } from "../utils/constants";
import DivCol12 from "./DivCol12";
import pdfMake from "pdfmake/build/pdfmake.min";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { formatTodaysDateTime } from "../utils/resources";
import { BsDownload } from "react-icons/bs";

export default function FetcherReports({
  startDate,
  endDate,
  reportsFiltered,
}) {
  const [allPeople, setAllPeople] = useState([]);
  const [reportsCountOnRange, setReportsCountOnRange] = useState([]);
  const [reportsCountOffAllTime, setReportsCountOffAllTime] = useState([]);

  let institutional_logotype_base_64 = "";
  fetch("/img/admin/avatar.png")
    .then((request) => request.blob())
    .then((response) => {
      const reader = new FileReader();
      reader.readAsDataURL(response);
      reader.addEventListener("load", () => {
        institutional_logotype_base_64 = reader.result;
      });
    });

  function getAllPeople() {
    fetch(`${API_ROUTE}/people`)
      .then((request) => request.json())
      .then((data) => setAllPeople(data));
  }

  function getReportsCountOnRange() {
    fetch(`${API_ROUTE}/reports/count?start=${startDate}&end=${endDate}`)
      .then((request) => request.json())
      .then((data) => setReportsCountOnRange(data));
  }

  function getReportsCountOfAllTime() {
    fetch(`${API_ROUTE}/reports/counts`)
      .then((request) => request.json())
      .then((data) => setReportsCountOffAllTime(data));
  }

  useEffect(() => {
    getAllPeople();
    getReportsCountOfAllTime();
  }, []);

  useEffect(() => {
    getReportsCountOnRange();
  }, [startDate, endDate]);

  function makePdf() {
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
            text: `Total personas agendadas: (${allPeople.length})`,
            style: "header",
            alignment: "center",
            marginBottom: 30,
          },
          allPeople.length !== 0
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
                    ...allPeople.map(
                      ({ id, name, person, fac, text_asunt }) => [
                        id,
                        name,
                        person,
                        fac,
                        text_asunt,
                      ]
                    ),
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
              reportsCountOffAllTime.length !== 0 ? "" : " (0)"
            }`,
            style: "header",
            alignment: "center",
            marginBottom: 30,
          },
          reportsCountOffAllTime.length !== 0
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
                    ...reportsCountOffAllTime.map(({ person, counts }) => [
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
    <DivCol12>
      <button
        onClick={makePdf}
        className="btn btn-light btn-sm"
        title="Reporte PDF"
      >
        Descargar <BsDownload className="mb-1" />
      </button>
    </DivCol12>
  );
}
