const formatDateTime = (isoString) => {
  const date = new Date(isoString);

  const options = {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  let formatted = date.toLocaleString("en-US", options);

  // Remove extra commas and fix separator
  formatted = formatted
    .replaceAll(",", "") // remove all commas
    .replace(/(\d{4})/, "$1 •"); // add bullet after year

  return formatted;
};

const EventCard = ({ event }) => {
  return (
    <div className="col-md-4">
      <div className="card m-2 border-0 overflow-hidden mb-4 bg-light position-relative event-card">
        <span
          className="py-2 position-absolute top-0 start-0 m-2 badge bg-light text-dark"
          style={{ fontSize: "13px" }}
        >
          {event.type} Event
        </span>

        <img
          src={event.thumbnail}
          alt={event.title}
          className="card-img-top rounded img-fluid w-100 object-fit-cover"
          style={{ height: "220px" }}
        />
        <div className="card-body p-0">
          <p
            className="card-text text-secondary fw-semibold p-0 m-0"
            style={{ fontSize: "13px" }}
          >
            {formatDateTime(event.startDateTime)} IST
          </p>
          <p className="card-text fs-4 fw-bold p-0">{event.title}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
