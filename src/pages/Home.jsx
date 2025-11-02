import { useState } from "react";
import Header from "../components/Header";
import EventList from "../components/EventList";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="bg-light min-vh-100">
        <EventList searchTerm={searchTerm} />
      </main>
    </>
  );
};

export default Home;
