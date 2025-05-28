const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  date: String,   // changed from day to date
  time: String
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
