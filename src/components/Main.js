import { Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";

import BookingPage from "./BookingPage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </main>
  );
};

export default Main;
