import DivCol12 from "./DivCol12";

export default ({ ctxRef }) => (
  <DivCol12 x="12 my-4">
    <canvas ref={ctxRef} width="700" height="400" />
  </DivCol12>
);