import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const { kidId, sessionType, date } = req.body;

  const booking = await Booking.create({
    kidId,
    sessionType,
    date
  });

  res.json(booking);
};

export const listBookings = async (req, res) => {
  const bookings = await Booking.find()
    .populate("kidId");
  res.json(bookings);
};
