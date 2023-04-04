import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

export default ({ setEmail, inputValue, labelInfo }) => (
  <FloatingFormCol12x x="8">
    <input
      onChange={(evt) => setEmail(evt.target.value)}
      value={inputValue}
      className="form-control"
      type="email"
      placeholder="Email"
      spellCheck="false"
      autoComplete="off"
      required
    />
    <Label labelInfo={labelInfo} />
  </FloatingFormCol12x>
);
