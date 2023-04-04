import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { formatTodaysDateTime } from "../utils/todaylib";
import { BsDownload } from "react-icons/bs";

export default function Downloader({ pdf }) {
  function downloadPdf() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdf.open();
    // .download(`RSystfip-Report-${formatTodaysDateTime()}.pdf`);
  }

  return (
    <FloatingFormCol12x x="2">
      <button
        onClick={downloadPdf}
        className="form-control btn btn-light"
        title="Reporte PDF"
      >
        PDF <BsDownload className="mb-1" />
      </button>
      <Label labelInfo="Descargar:" />
    </FloatingFormCol12x>
  );
}
