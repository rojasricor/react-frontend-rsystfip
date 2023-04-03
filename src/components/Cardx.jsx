export default function Cardx({ children, x = 6, title = "" }) {
  return (
    <div className={`col-md-${x} mx-auto`}>
      <div className="card card-body border-0 rounded-4 shadow">
        <h1 className="h3 text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
}
