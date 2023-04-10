import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";
import { BsDownload } from "react-icons/bs";

export default ({ pdf }) => (
  <FloatingFormCol12x x="2">
    <button
      onClick={
        () => pdf.open()
        // pdf.download(`RSystfip-Report-${formatTodaysDateTime()}.pdf`)
      }
      className="form-control btn btn-light border"
      title="Reporte PDF"
    >
      PDF <BsDownload className="mb-1" />
    </button>
    <Label labelInfo="Descargar:" />
  </FloatingFormCol12x>
);
