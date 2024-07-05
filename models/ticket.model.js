import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  movieTitle: {
    type: String,
    required: true,
  },
  numberOfTickets: {
    type: Number,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  theatreName: {
    type: String,
    required: true,
  },
  showTime: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  }
});

const ticketModel = mongoose.model('Tickets', ticketSchema);

export default ticketModel;
