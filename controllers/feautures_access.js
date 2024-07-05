const { sequelize } = require('../models');
const db = require('../models');

const getFeatureAccessByVendorId = async (req, res) => {
    const { vid } = req.params;

    try {
        const query = `
            SELECT fa.* 
            FROM features_accesses fa
            INNER JOIN vendor_info vi ON fa.pid = vi.package_id
            WHERE vi.vid = :vid;
        `;

        const featureAccessList = await sequelize.query(query, {
            replacements: { vid: vid},
            type: sequelize.QueryTypes.SELECT
        });

        if (featureAccessList.length === 0) {
            return res.status(404).json({ message: 'No feature access found for the vendor' });
        }



        res.status(200).json({  featureAccessList });
    } catch (error) {
        console.error('Error fetching feature access details:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};


const getAllDataByColumn = async (req, res) => {
    try {
      const { columnName } = req.params;
  
      const validColumns = Object.keys(db.features_access.rawAttributes);
      if (!validColumns.includes(columnName)) {
        return res.status(400).json({ message: 'Invalid column name' });
      }
  
      const data = await db.features_access.findAll({
        attributes: [columnName] 
      });
  
      const columnValues = data.map(entry => entry[columnName]); 
  
      res.status(200).json({ [columnName]: columnValues });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  };





module.exports = { getFeatureAccessByVendorId ,
    getAllDataByColumn
};
