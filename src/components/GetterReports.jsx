import { useState, useEffect } from "react";
import { API_ROUTE } from "../utils/constants";
import DivCol12 from "./DivCol12";
import { FaDownload } from "react-icons/fa";
import { formatTodaysDateTime } from "../utils/resources";
import pdfMake from "pdfmake/build/pdfmake.min";
import "pdfmake/build/vfs_fonts";

export default function GetterReports({ startDate, endDate, reportsFiltered }) {
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
    fetch(`${API_ROUTE}/get/people`)
      .then((request) => request.json())
      .then((data) => setAllPeople(data));
  }

  function getReportsCountOnRange() {
    fetch(
      `${API_ROUTE}/get/reports/count/date?start=${startDate}&end=${endDate}`
    )
      .then((request) => request.json())
      .then((data) => setReportsCountOnRange(data));
  }

  function getReportsCountOfAllTime() {
    fetch(`${API_ROUTE}/get/reports/count/all`)
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
            text: "Total personas agendadas:",
            style: "header",
            alignment: "center",
            marginBottom: 30,
          },
          {
            layout: "lightHorizontalLines",
            alignment: "center",
            table: {
              dontBreakRows: true,
              headerRows: 1,
              body: [
                [
                  { text: "No.", style: "tableHeader" },
                  { text: "Nombres", style: "tableHeader" },
                  { text: "Categoría", style: "tableHeader" },
                  { text: "Facultad", style: "tableHeader" },
                  { text: "Asunto", style: "tableHeader" },
                ],
                ...allPeople.map(({ id, name, person, fac, text_asunt }) => [
                  id,
                  name,
                  person,
                  fac,
                  text_asunt,
                ]),
              ],
            },
          },
          {
            text: "Reportes entre el rango de fecha:",
            style: "header",
            alignment: "center",
            marginBottom: 30,
            pageBreak: "before",
          },
          {
            layout: "lightHorizontalLines",
            alignment: "center",
            table: {
              dontBreakRows: true,
              headerRows: 1,
              body: [
                [
                  { text: "Nombres", style: "tableHeader" },
                  { text: "Fecha", style: "tableHeader" },
                  { text: "Diario", style: "tableHeader" },
                  { text: "Programado", style: "tableHeader" },
                  { text: "Tipo de persona", style: "tableHeader" },
                ],
                ...reportsFiltered.map(
                  ({ name, date, presence_count, absence_count, person }) => [
                    name,
                    date,
                    presence_count,
                    absence_count,
                    person,
                  ]
                ),
              ],
            },
          },
          {
            text: "Cantidad agendado(a)s entre el rango de fecha:",
            style: "header",
            alignment: "center",
            marginBottom: 30,
            pageBreak: "before",
          },
          {
            layout: "lightHorizontalLines",
            alignment: "center",
            table: {
              dontBreakRows: true,
              headerRows: 1,
              body: [
                [
                  { text: "Tipo de persona", style: "tableHeader" },
                  { text: "Cantidad", style: "tableHeader" },
                ],
                ...reportsCountOnRange.map(({ person, counts }) => [
                  person,
                  counts,
                ]),
              ],
            },
          },
          {
            text: "Cantidad total agendado(a)s:",
            style: "header",
            alignment: "center",
            marginBottom: 30,
            pageBreak: "before",
          },
          {
            layout: "lightHorizontalLines",
            alignment: "center",
            table: {
              dontBreakRows: true,
              headerRows: 1,
              body: [
                [
                  { text: "Tipo de persona", style: "tableHeader" },
                  { text: "Cantidad", style: "tableHeader" },
                ],
                ...reportsCountOffAllTime.map(({ person, counts }) => [
                  person,
                  counts,
                ]),
              ],
            },
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: "black",
          },
        },
      })
      .download(`RSystfip-Report-${formatTodaysDateTime()}.pdf`);
  }

  return (
    <DivCol12>
      <button
        onClick={makePdf}
        className="btn btn-light btn-sm"
        title="Reporte PDF"
      >
        Descargar PDF <FaDownload className="mb-1" />
      </button>
    </DivCol12>
  );
}
