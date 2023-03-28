import DivRow from "./DivRow";
import DivCol12 from "./DivCol12";

export default function Rower({ children }) {
  return (
    <DivRow>
      <DivCol12>{children}</DivCol12>
    </DivRow>
  );
}
