const Guest = require('../models/Guest');

exports.createRSVP = async (req, res) => {
  const { name, phoneNumber } = req.body;

  try {
    const existingGuest = await Guest.findOne({ name, phoneNumber });
    
    if (existingGuest) {
      return res.status(409).json({ message: 'Thông tin khách mời đã có sẵn.' });
    }
    const guest = new Guest({ name, phoneNumber });
    await guest.save();
    res.status(201).json({ message: 'RSVP created successfully', guest });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
