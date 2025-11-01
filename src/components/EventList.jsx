import { useState } from "react";
import useFetch from "../hooks/useFetch";
import EventCard from "./EventCard";

const EventList = () => {
  const [filterType, setFilterType] = useState("");
  const { data, loading, error } = useFetch(
    "https://meetup-app-backend-eac.vercel.app/events"
  );

  const filteredEvents = data?.events?.filter((event) =>
    filterType ? event.type.toLowerCase() === filterType : true
  );

  return (
    <>
      <div className="container p-0 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">Meetup Events</h2>

          <select
            className="form-select w-auto border-0 text-secondary no-outline"
            style={{ fontSize: "0.9rem" }}
            aria-label="Select Event Type"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Select Event Type</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        {error && <p>Error in fetching events.</p>}
        {loading && <p className="mt-3">Loading events...</p>}
        {data && (
          <div className="container mt-2">
            <div className="row">
              {filteredEvents && filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))
              ) : (
                <p className="">No events found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EventList;
