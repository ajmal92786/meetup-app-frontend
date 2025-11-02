import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-light">
      <nav className="container p-0 pt-3 pb-4 border-bottom d-flex justify-content-between align-items-center">
        <h2
          className="text-danger fw-bold m-0"
          style={{ fontFamily: "italic" }}
        >
          Meetup
        </h2>

        <div
          className="d-flex align-items-center bg-white rounded px-2"
          style={{ width: "250px" }}
        >
          <IoIosSearch className="text-secondary fs-5" />
          <input
            type="text"
            className="form-control border-0 no-outline"
            placeholder="Search by title and tags..."
            aria-label="Search"
            style={{ fontSize: "0.9rem" }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
