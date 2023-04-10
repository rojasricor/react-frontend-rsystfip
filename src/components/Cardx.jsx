export default ({ children, x = 6, title = "" }) => (
  <div className={`col-md-${x} mx-auto`}>
    <div className="card card-body">
      <h1 className="h3 text-center">{title}</h1>
      {children}
    </div>
  </div>
);
