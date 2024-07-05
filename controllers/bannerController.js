const Banner = require('../models/index').banners;

async function createBanner(req, res) {
  try {
    const { vid } = req.params; 
    
    if (!req.file) {
      return res.status(400).json({ error: 'No file was uploaded' });
    }

    const imageUrl = `/uploads/banners/${req.file.filename}`;


    const banner = await Banner.create({ vid: vid, image: imageUrl });

  
    res.status(201).json(banner);
  } catch (error) {
    console.error('Error creating banner:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}








async function updateBanner(req, res) {
  try {
    const { id, vid } = req.params; 
    const { vendor_id } = req.body;
    const image = req.file ? `/uploads/banners/${req.file.filename}` : null;
    
    const banner = await Banner.findOne({ where: { id, vendor_id: vid } });

    if (!banner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    await banner.update({ vendor_id, image });
 
    res.status(200).json({ message: 'Banner updated successfully' });
  } catch (error) {
    console.error('Error updating banner:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}






async function deleteBanner(req, res) {
  try {
    const { id, vid } = req.params; 
    const banner = await Banner.findOne({ where: { id, vid: vid } });

    if (!banner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    await banner.destroy();
    res.status(200).json({ message: 'Banner deleted successfully' });
  } catch (error) {
    console.error('Error deleting banner:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}




async function getBannersByVendorId(req, res) {
  try {
    const { vid } = req.params;
    const banners = await Banner.findAll({ where: { vid: vid } });
    res.status(200).json(banners);
  } catch (error) {
    console.error('Error fetching banners:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}




async function getAllBannersByVendorId(req, res) {
  try {
    const { vid } = req.params;
    const banners = await Banner.findAll({ where: { vid: vid } });
    res.status(200).json(banners);
  } catch (error) {
    console.error('Error fetching banners:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createBanner,
  updateBanner,
  deleteBanner,
  getBannersByVendorId,
  getAllBannersByVendorId,
};
