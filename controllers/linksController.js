const db = require('../models');

const Links = db.links;

const getLinks = async (req, res) => {
  try {
    const links = await Links.findAll();
    // Extract the first element from the array
    const link = links[0];
    // Send the link object in the response
    res.json({
      id: link.id,
      rateuslink: link.rateuslink,
      sharelink: link.sharelink
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getLinks,
};
