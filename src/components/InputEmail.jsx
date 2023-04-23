import FloatingFormCol12x from "./FloatingFormCol12x";
import Label from "./Label";

const inputEmail = ({ setEmail, inputValue, labelInfo }) => (
  <FloatingFormCol12x x="8">
    <input
      onChange={({ target: { value } }) => setEmail(value)}
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

export default inputEmail;
