import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { IoMdTime } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { FaIndianRupeeSign } from "react-icons/fa6";

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
    .replace(/(\d{4})/, "$1 at"); // add bullet after year

  return formatted;
};

const EventDetails = () => {
  const eventId = useParams();
  // const { data, loading, error } = useFetch(
  //   `https://meetup-app-backend-eac.vercel.app/events/${eventId.eventId}`
  // );
  const { data, loading, error } = useFetch(
    `http://localhost:3000/events/${eventId.eventId}`
  );

  return (
    <>
      <Header />
      <main className="bg-light">
        <div className="container p-0">
          {error && <p>Error fetching event.</p>}
          {loading && (
            <div className="bg-light vh-100">
              <p className="py-3 fw-semibold">Loading event...</p>
            </div>
          )}
          {data && data.event ? (
            <div className="d-flex justify-content-between">
              <div className="col-md-7">
                <h2 className="fw-bold m-0 py-3">{data.event.title}</h2>
                <p className="m-0 text-muted fw-semibold">Hosted By:</p>
                <p className="fw-bold">{data.event.hostedBy}</p>
                <div className="py-3">
                  <div className="ratio ratio-16x9">
                    <img
                      src={data.event.thumbnail}
                      alt={data.event.title}
                      className="object-fit-cover"
                    />
                  </div>
                </div>
                <h5 className="fw-bold">Details:</h5>
                <p className="text-secondary">{data.event.description}</p>
                <h5 className="fw-bold">Additional Information:</h5>
                <p className="m-0">
                  <strong>Dress Code:</strong> {data.event.dressCode}
                </p>
                <p>
                  <strong>Age Restrictions:</strong> {data.event.ageRestriction}
                </p>
                {data.event.tags && (
                  <div>
                    <h5 className="fw-bold">Event Tags:</h5>
                    <div className="d-flex">
                      {data.event.tags.map((tag, index) => (
                        <p
                          key={index}
                          className="p-2 me-3 badge text-light bg-danger"
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="col-md-4 py-4 mt-2">
                <div className="text-muted bg-white p-4 rounded">
                  <div className="pb-4 d-flex align-items-center">
                    <div className="px-1">
                      <IoMdTime className="fs-5" />
                    </div>
                    <div className="" style={{ fontSize: "16px" }}>
                      <p className="m-0">
                        {formatDateTime(data.event.startDateTime)} to
                      </p>
                      <p className="m-0">
                        {formatDateTime(data.event.endDateTime)}
                      </p>
                    </div>
                  </div>

                  <div className="pb-4 d-flex align-items-center">
                    <div className="px-1">
                      <GrLocation className="fs-5" />
                    </div>
                    <div className="" style={{ fontSize: "16px" }}>
                      <p className="m-0">{data.event.venue}</p>
                      <p className="m-0">{data.event.address}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="ps-2 pe-1">
                      <FaIndianRupeeSign className="fs-6" />
                    </div>
                    <div className="" style={{ fontSize: "16px" }}>
                      <p className="m-0 fw-semibold">{data.event.price}</p>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <h4 className="fw-bold">
                    Speakers: ({data.event.speakers.length})
                  </h4>
                  <div className="row py-2">
                    {data.event.speakers.map((speaker) => (
                      <div key={speaker._id} className="col-md-6 mb-3">
                        <div
                          className="bg-white py-3 rounded text-center"
                          style={{ width: "11rem" }}
                        >
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="img-fluid rounded-circle object-fit-cover"
                            style={{
                              width: "60px",
                              height: "60px",
                            }}
                          />
                          <div className="pt-1">
                            <p className="m-0 fw-bold">{speaker.name}</p>
                            <p className="m-0 text-muted">
                              {speaker.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            data?.message && (
              <p className="vh-100 py-5 fs-3 fw-semibold">Event not found.</p>
            )
          )}
        </div>
      </main>
    </>
  );
};

export default EventDetails;
