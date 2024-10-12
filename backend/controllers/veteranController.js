const Veteran = require('../models/veteranModel');

// Create a new veteran
exports.createVeteran = async (req, res) => {
  try {
    const newVeteran = await Veteran.create(req.body);
    res.status(201).json(newVeteran);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all veterans
exports.getVeterans = async (req, res) => {
  try {
    const veterans = await Veteran.find();
    res.status(200).json(veterans);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};