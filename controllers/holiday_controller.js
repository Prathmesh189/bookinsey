const { Holiday } = require('../models/index');
const { Op } = require('sequelize');

async function createEntery(req, res) {
  try {
    const { fullday_holiday, vid, date, time, status } = req.body;


    const existingEntry = await Holiday.findOne({
      where: {
        vid:vid,
        date: date,
        time: time
      }
    });

    if (existingEntry) {
      return res.status(400).json({ error: 'An entry with the same time already exists for this date' });
    }

  
    const holiday = await Holiday.create({ fullday_holiday, vid, date, time, status });

    res.status(201).json(holiday);
  } catch (error) {
    console.error('Error creating holiday:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getAllOffs(req, res) {
  try {
   
    const holidays = await Holiday.findAll();

   
    res.status(200).json(holidays);
  } catch (error) {
    console.error('Error fetching holidays:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


const moment = require('moment');


async function getDateStatus(req, res) {
  const { vid } = req.params; 
  let { date } = req.query; 
  
  
  date = moment(date).format('yyyy-MM-DD');

  try {
    const holiday = await Holiday.findAll({
      where: {
        vid: vid,
        date: date
      }
    });

    if (!holiday) {
      return res.status(404).json({ message: 'Holiday not found for the provided vid and date' });
    }

    res.status(200).json(holiday);
  } catch (error) {
    console.error('Error fetching holiday:', error   );
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getDateStatusandDelete(req, res) {
  const { vid,date, time } = req.params; 

  try {
   
    const deletedRecords = await Holiday.destroy({
      where: {
        vid: vid,
        date: date,
        time: time 
      }
    });

    if (deletedRecords > 0) {
      return res.json({ message: 'Records deleted successfully' });
    } else {
      return res.status(404).json({ message: 'No matching records found' });
    }
  } catch (error) {
    console.error('Error deleting holiday:', date,   error    );
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getDateStatusoffvid(req, res) {
  const { vid } = req.params;
  const currentDate = new Date(); 

  try {
    const holidays = await Holiday.findAll({
      where: {
        vid: vid,
        date: {
          [Op.gte]: currentDate 
        }
      },
      order: [['date', 'ASC']] 
    });

    if (!holidays || holidays.length === 0) {
      return res.status(404).json({ message: 'No holidays found for the provided vid and date onwards' });
    }

    res.status(200).json(holidays);
  } catch (error) {
    console.error('Error fetching holidays:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteEntriesByVendorAndTime(req, res) {
  try {
    const { vid, date } = req.body;

   
    const deletedRecords = await Holiday.destroy({
      where: {
        vid: vid,
        date: date
      }
    });

    if (deletedRecords > 0) {
      return res.json({ message: `Entries for vendor ${vid} at date ${date} deleted successfully` });
    } else {
      return res.status(404).json({ message: `No entries found for vendor ${vid} at time ${date}` });
    }
  } catch (error) {
    console.error('Error deleting entries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createFulldayHoliday(req, res) {
  try {
    const { fullday_holiday, vid, date   } = req.body;
    const time = '00:00:00';
    const holiday = await Holiday.create({ fullday_holiday, vid, date ,time   });

    res.status(201).json({ message: "full day off", holiday });
  } catch (error) {
    console.error('Error creating holiday:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
async function checkFullDayHoliday(req, res) {
  try {
    const { vid, date } = req.params;

    const holidays = await Holiday.findAll({
      where: {
        vid: vid,
        date: date,
        fullday_holiday: '1'
      }
    });
    // If any holidays found, return true, else return false
    const hasFullDayHoliday = holidays.length > 0 ? true : false;
    res.status(200).json({ hasFullDayHoliday });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


async function getDateStatusoffvidhistory(req, res) {
  const { vid } = req.params;
  const currentDate = new Date(); 

  try {
    const holidays = await Holiday.findAll({
      where: {
        vid: vid,
        date: {
          [Op.lte]: currentDate 
        }
      },
      order: [['date', 'ASC']] 
    });

    if (!holidays || holidays.length === 0) {
      return res.status(404).json({ message: 'No holidays found for the provided vid and date before today' });
    }

    res.status(200).json(holidays);
  } catch (error) {
    console.error('Error fetching holidays:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



module.exports = {
 
  getAllOffs,
  createEntery,
  getDateStatus,
  getDateStatusoffvid,
  getDateStatusoffvidhistory,
  getDateStatusandDelete,
  createFulldayHoliday,
  deleteEntriesByVendorAndTime,
  checkFullDayHoliday


};
