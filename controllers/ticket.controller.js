import ticketModel from "../models/ticket.model.js";

const saveTicket = async (req, res) => {
  try {
    const {
      bookingId,
      userName,
      userEmail,
      movieTitle,
      numberOfTickets,
      totalCost,
      theatreName,
      showTime,
      bookingDate,
      paymentMethod,
      phoneNumber,
      city,
      photo
    } = req.body;

    const newTicket = new ticketModel({
      bookingId,
      userName,
      userEmail,
      movieTitle,
      numberOfTickets,
      totalCost,
      theatreName,
      showTime,
      bookingDate,
      paymentMethod,
      phoneNumber,
      city,
      photo
    });

    const savedTicket = await newTicket.save();
    res.status(201).json({ message: "Ticket Booked Successfully", alert: true });
  } catch (error) {
    res.status(500).json({ message: error.message, alert: true });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const { email } = req.body;
   
    const userBookings = await ticketModel.find({ userEmail: email });
    
    if (!userBookings.length) {
      return res.status(404).json({ message: "No bookings found for this user", alert: true });
    }

    res.status(200).json({ data: userBookings, alert: true });
  } catch (error) {
    res.status(500).json({ message: error.message, alert: true });
  }
};

export { saveTicket, getUserBookings };
