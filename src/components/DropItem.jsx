export default function DropItem({ children, h6 }) {
  return (
    <div className="dropdown-menu gap-1 rounded-3 mx-0 border-0 shadow w-220px">
      <h6 className="dropdown-header">{h6}</h6>
      {children}
    </div>
  );
}
