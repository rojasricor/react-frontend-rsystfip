export default ({ title, data, end }) => (
  <>
    <h5 className="text-center">{title}</h5>
    <div className="list-group w-auto mb-5">
      {data.map((person, index) => (
        <li
          key={index}
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            className="flex-shrink-0"
            src="/rsystfip.svg"
            alt="twbs"
            width="32"
            height="27"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">{person.person}</h6>
              <p className="mb-0 opacity-75">{person.counts}</p>
            </div>
            <small className="opacity-50 text-nowrap">{end}</small>
          </div>
        </li>
      ))}
    </div>
  </>
);
