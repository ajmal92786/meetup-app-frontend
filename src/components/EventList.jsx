import useFetch from "../useFetch";
import EventCard from "./EventCard";

const EventList = () => {
  // const { data, loading, error } = useFetch(
  //   "https://meetup-app-backend-eac.vercel.app/events"
  // );
  const { data, loading, error } = useFetch("http://localhost:3000/events");
  console.log(data);

  return (
    <>
      <div className="container p-0 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">Meetup Events</h2>

          <select
            className="form-select w-auto border-0 text-secondary no-outline"
            style={{ fontSize: "0.9rem" }}
            aria-label="Select Event Type"
          >
            <option value="">Select Event Type</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        <div className="container mt-2">
          <div className="row">
            {data && data.events && data.events.length > 0 ? (
              data.events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))
            ) : (
              <p className="">No events found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventList;
