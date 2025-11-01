import Header from "../components/Header";
import EventList from "../components/EventList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-light min-vh-100">
        <EventList />
      </main>
    </>
  );
};

export default Home;
