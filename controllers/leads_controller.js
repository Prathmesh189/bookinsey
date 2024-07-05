// controllers/lead.controller.js
const { Lead } = require('../models');
const { sequelize } = require('../models');
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');

const Leads = require('../models/'); // Import the Leads model


const historyleads = async (req, res) => {
    const { vid, daysCount } = req.params;

    try {
        const currentDate = new Date();
        const startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() - daysCount);

        const leads = await Lead.findAll({
            where: {
                vid,
                selected_Date: {
                    [Op.between]: [startDate.toISOString().split('T')[0], currentDate.toISOString().split('T')[0]]
                }
            },
            order: [['selected_Date', 'DESC']] // Order by selected_Date in descending order
        });

        res.status(200).json({ message: `Successfully retrieved leads by vid within the last ${daysCount} days in descending order`, leads });
    } catch (error) {
        console.error('Error fetching leads by vid within the last days:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};




const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ message: 'Lead created successfully', lead });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const getAllLeadsByVendorId = async (req, res) => {
  try {
    const { vid } = req.params;
    const leadsCount = await Lead.count({ where: { vid } });
    res.status(200).json({ count: leadsCount });
  } catch (error) {
    console.error('Error fetching leads count by vendor ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.status(200).json({ message: 'Successfully retrieved leads', leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};



const getAllLeadsforvendorId = async (req, res) => {
  try {
    const vid = req.params.vid; 
    const leads = await Lead.findAll({ where: { vendor_id: vid } });
    res.status(200).json({ message: 'Successfully retrieved leads by vendor_id', leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};



const getLeadCountByVendorIds = async (req, res) => {
  const vid = req.params.vid; 
  try {
    const leadCounts = await Lead.findOne({
      attributes: [
        [
          sequelize.literal(`SUM(CASE WHEN lead_status = 3 THEN 1 ELSE 0 END)`),
          'status1Count'
        ],
        [
          sequelize.literal(`SUM(CASE WHEN lead_status = 0 AND selected_date >= CURDATE() THEN 1 ELSE 0 END)`),
          'status2Count'
        ],
        [
          sequelize.literal(`SUM(CASE WHEN lead_status = 1  THEN 1 ELSE 0 END)`),
          'status3Count'
        ],
        [
          sequelize.literal(`SUM(CASE WHEN lead_status = 2 THEN 1 ELSE 0 END)`),
          'status4Count'
        ],
        [
          sequelize.literal(`COUNT(*)`),
          'totalCount'
        ]
      ],
      where: { vid },
      raw: true 
    });

    if (!leadCounts) {
      return res.status(404).json({ message: 'No leads found for the specified vendor' });
    }


    const currentDate = new Date();
    const pendingOldLeadsCount = await Lead.count({
      where: { 
        vid: vid,
        lead_status: [2, 0],
        selected_Date: { [Op.lt]: currentDate },
        appointment_time: { [Op.lt]: currentDate }
      }
    });

    res.status(200).json({
      message: 'Successfully retrieved lead counts',
      leadCounts: {
        closed: leadCounts.status1Count || 0,
        pending: leadCounts.status2Count || 0,
        schdule: leadCounts.status3Count || 0,
        cancle: leadCounts.status4Count || 0,
        total: leadCounts.totalCount || 0,
        pendingOld: pendingOldLeadsCount
      }
    });
  } catch (error) {
    console.error('Error fetching lead counts:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};



const getAllCalculationLeadsasPervendorId = async (req, res) => {
  const vid = req.params.vid;

  try {
  
    const leads = await Lead.findAll({
      where: { 
        vid: vid,
        lead_status: [3 ] 
      }
    });

   
    const leadTotal = await Lead.findAll({
      where: { 
        vid: vid
      }
    });

    let totalLeads = leadTotal.length; 
    let totalFinalAmount = 0;
    let closureCount = 0;
    let cancelledCount = 0;
    let pendingold = 0;

 
    leads.forEach(lead => {
      totalFinalAmount += parseFloat(lead.final_amount);
      if (lead.lead_status === 3) {
        closureCount++;
      } else if (lead.lead_status === 2) {
        cancelledCount++ ;
      }
    });

  
    const currentDate = new Date();
    const pendingLeads = leads.filter(lead => {
      const selectedDate = new Date(lead.selected_Date);
      const appointmentTime = new Date(lead.appointment_time);
      return lead.lead_status === 2 || lead.lead_status === 3 && selectedDate < currentDate && appointmentTime < currentDate;
    });

 
    pendingold = pendingLeads.length;

    res.status(200).json({ 
      message: 'Successfully retrieved leads',
      total_leads: totalLeads,
      total_final_amount: totalFinalAmount,
      closure: closureCount,
      cancelled: cancelledCount,
      pendingold: pendingold
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};



const getAllLeadsforHomePage = async (req, res) => {
  const vid = req.params.vid; 
  const selectedDate = req.query.date; 

  try {
    const query = `
      SELECT * FROM lead WHERE vid = :vid AND DATE(selected_Date) :selected_Date`;
    const leads = await sequelize.query(query, {
      replacements: { vid, selectedDate }, 
      type: sequelize.QueryTypes.SELECT
    });

    res.status(200).json({ 
      message: 'Successfully retrieved leads',     
      leads: leads,
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const pendingeadsasPervendorId = async (req, res) => {
  const vid = req.params.vid;
  const today = new Date();
  today.setHours = (0,0,0,0);

  try {
    const pendingleads = await Lead.findAll({
      where: { vid: vid,
    //   selected_Date: { [Op.gte]: today },
      lead_status: 0 }
    });

    res.status(200).json({ 
      message: 'Successfully retrieved pending leads',     
      lead: pendingleads
    });
  } catch (error) {
    console.error('Error fetching pending leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const ClosedeadsasPervendorId = async (req, res) => {
  const vid = req.params.vid;
  const daysCount = parseInt(req.params.daysCount); 

  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - daysCount);

  try {
    const closedLeads = await Lead.findAll({
      where: { 
        vid: vid,
        selected_Date: { [Op.gte]: fromDate },
        lead_status: 3
      }
    });

    res.status(200).json({ 
      message: `Successfully retrieved closed leads for ${daysCount}   days`,     
      lead: closedLeads
    });
  } catch (error) {
    console.error('Error fetching closed leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const CancelledeadsasPervendorId = async (req, res) => {
  const vid = req.params.vid;
  const daysCount = parseInt(req.params.daysCount); 

  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - daysCount);

  try {
    const cancelledLeads = await Lead.findAll({
      where: { vid: vid, 
        lead_status: 2,
        selected_Date: { [Op.gte]: fromDate  }
      }
    });

    res.status(200).json({ 
      message: `Successfully retrieved cancelled leads for ${daysCount}   days`,     
      lead: cancelledLeads
      
    });
  } catch (error) {
    console.error('Error fetching cancelled leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const ArrivingLeadsPerVendorId = async (req, res) => {
  const vid = req.params.vid;

  try {
    const leads = await Lead.findAll({
      where: { vid: vid, lead_status: 1 }


      ,     order: [['selected_Date', 'DESC']]  
    });
    res.status(200).json({ 
      message: 'Successfully retrieved leads for arring',     
      lead: leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const updateLeadById = async (req, res) => {
  const leadId = req.params.lead_id;
  const { lead_status } = req.body; 

  
  try {
    const lead = await Lead.findByPk(leadId);
    
    if (!lead) {
      return res.status(404).json({ message: 'No such lead is present for id  '   + leadId });
    }

    lead.lead_status = lead_status; 

    await lead.save(); 

    res.status(200).json({ message: 'Lead updated successfully', lead });
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

const getAllLeadsasPervendorId = async (req, res) => {
  const vid = req.params.vid;

  try {
    const leads = await Lead.findAll({
      where: { vid: vid }
    });

    io.emit('leadsData', { message: 'Successfully retrieved leads', leads });

    res.status(200).json({ 
      message: 'Successfully retrieved leads',
      leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

const getAllvendorIdaa = async (req, res) => {
  const vid = req.params.vid;
  const daysCount = parseInt(req.params.daysCount); 

  try {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - daysCount);

    const leads = await Lead.findAll({
      where: { 
        vid: vid,
        selected_Date: { [Op.gte]: fromDate } 
      }
      ,     order: [['selected_Date', 'DESC']]  
    });

    res.status(200).json({ 
      message: `Successfully retrieved leads from the past ${daysCount} days`,
      leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}

const moment = require('moment');

const getAllDataByVendorIdAndDate = async (req, res) => {
  const vid = req.body.vid; 
  let selected_Date = moment(req.body.selected_Date, 'DD-MM-YYYY').format('YYYY-MM-DD'); 

  try {
    const leads = await Lead.findAll({
      where: { 
        vid: vid,
        selected_Date: selected_Date 
      },
      order: [['selected_Date', 'DESC']]
    });

    res.status(200).json({ 
      message: `Successfully retrieved leads for vendor ${leads.LENGTH} ${vid} on datee ${selected_Date}`,
      leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}

const BadgeCounting = async (req, res) => {
  const vid = req.params.vid;

  try {
    const pendingLeadsCount = await Lead.count({
      where: { vid: vid, lead_status: 0 }
    });

    res.status(200).json({ 
      message: 'Successfully retrieved pending leads count',     
      pendingLeadsCount: pendingLeadsCount
    });
  } catch (error) {
    console.error('Error fetching pending leads count:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const getLatestLeadByVendorId = async (req, res) => {
  try {
    const { vid } = req.params;
    const latestLead = await Lead.findOne({ where: { vid }, order: [['lead_id', 'DESC']] });
    res.status(200).json({ latestLead });
  } catch (error) {
    console.error('Error fetching latest lead by vendor ID:', error);
    res.status(500).json({ error: 'an network error occurred' });
  }
};


const makeClosed_Leads = async (req, res) => {
  try {
    const { vid } = req.params;
    
    
    const currentDate = new Date();
    const leadsToUpdate = await Lead.findAll({ 
      where: { 
        vid,
        lead_status: 2,
        selected_Date: { [Op.lt]: currentDate } 
      } 
      ,     order: [['selected_Date', 'DESC']]  
    });


    await Promise.all(leadsToUpdate.map(async (lead) => {
      lead.lead_status = 1;
      await lead.save();
    }));

  
    const leadsCount = await Lead.count({ where: { vid } });

    res.status(200).json({ count: leadsCount });
  } catch (error) {
    console.error('Error fetching leads count by vendor ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






const getAllLeadsByVidAndStatusBeforeToday = async (req, res , Op  ) => {
  const { vid } = req.params;

  try {
    const today = new Date();
 
    const leads = await Lead.findAll({
      where: {
        vid: vid,
        lead_status: 0, 
        selected_Date: { [Op.lt]: today } 
      }
      ,     order: [['selected_Date', 'DESC']]  
    });
    res.status(200).json({ message: 'Successfully retrieved leads by vid and status before today', leads });
  } catch (error) {
    console.error('Error fetching leads by vid and status before today:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};






const getLeadsAsperDate = async (req, res) => {
    try {
        const { vid } = req.params; // Extract vid from URL params
        const selected_Date = req.query.selected_Date; // Extract selected_Date from URL query

        if (!vid || !selected_Date) {
            return res.status(400).json({ message: 'VID and selected date are required.' });
        }

        const leads = await Lead.findAll({
            where: {
                vid: vid,
                selected_Date: selected_Date
            }
        });

        res.status(200).json({ message: `Successfully retrieved leads by VID  ${vid}   and  selected date  $selected_Date  `, leads });
    } catch (error) {
        console.error('Error fetching leads by VID and selected date:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
    







const pendingOldData = async (req, res) => {
  const vid = req.params.vid;
  

  try {
    const currentDate = new Date();

    const fromDate = new Date(currentDate);
    fromDate.setDate(fromDate.getDate() );

    const leads = await Lead.findAll({
      where: { 
        vid: vid,
        lead_status: { [Op.in]: [0, 1] }, 
        appointment_time: { [Op.lt]:  currentDate }, 
        selected_Date: { [Op.lt]: fromDate } 
      }
      ,     order: [['selected_Date', 'DESC']]  
    });

    res.status(200).json({ 
      message: `Successfully retrieved leads from the past  days with status 2 or 3 and appointment time and date passed`,
      leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}




module.exports = {
  updateLeadById,
  createLead,
  getAllLeads,
  getLeadCountByVendorIds,
  getAllLeadsforHomePage,
  getAllLeadsasPervendorId,
  pendingeadsasPervendorId,
  ClosedeadsasPervendorId,
  ArrivingLeadsPerVendorId,
  CancelledeadsasPervendorId,
  getAllCalculationLeadsasPervendorId,
  getAllLeadsforvendorId,
  getAllvendorIdaa,
  getAllDataByVendorIdAndDate,
  BadgeCounting,
  getAllLeadsByVendorId,
  getLatestLeadByVendorId,
  makeClosed_Leads,
  getAllLeadsByVidAndStatusBeforeToday,
  pendingOldData,
  historyleads,
  getLeadsAsperDate


};
