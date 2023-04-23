const Container = ({ children, clAdds = "" }) => (
  <div className={`container${clAdds}`}>{children}</div>
);

export default Container;
