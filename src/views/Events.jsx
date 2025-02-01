import { useEffect, useState, useContext } from "react";
import EventsAPI from "../API/endpoint/Events";
import { AuthContext } from "../Context/AuthContext";
import EventCard from "../components/Card";

const Events = () => {
  const { auth } = useContext(AuthContext);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await EventsAPI.getEvents();
        setEvents(response.data || []);
      } catch (err) {
        setError("Failed to fetch events.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRegistrationRequest = (eventId) => {
    // Log the registration request for debugging
    console.log("Registration request for event ID:", eventId);
  };

  if (loading) return <div className="spinner">Loading...</div>;

  if (error)
    return <div className="bg-red-100 text-red-700 p-4 rounded">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-8 pt-[150px]">
      <h1 className="text-4xl text-orange-500 font-bold text-center mb-2">
        Upcoming Events
      </h1>
      <h2 className="text-xl text-gray-600 text-center mb-2">
        Join Us for Exciting Opportunities
      </h2>
      <div className="w-16 h-1 bg-[#4d2c5e] mx-auto mb-6"></div>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              item={event}
              type="event"
              auth={auth}
              onRegister={handleRegistrationRequest}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
