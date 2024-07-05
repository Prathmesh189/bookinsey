
const db = require('../models');

const createSuggestion = async (req, res) => {
  try {
    const {   vid, } = req.params;
    const {  message, topic_id } = req.body;



    const newSuggestion = await db.suggestion.create({
      message,
      vid,
      topic_id
    });

    res.status(201).json(newSuggestion);
  } catch (error) {
    console.error('Error creating suggestion:', error);
    res.status(500).json({ error: 'Failed to create suggestion' });
  }
};


const getTermsConditions = async (req, res) => {
  try {
    const termsConditions = await db.terms_condition.findAll();
    res.status(200).json(termsConditions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error', errors : error  });
  }
};

const getTopicIds = async (req, res) => {
  try {
    const sugesstionTopic = await db.suggestion_topic.findAll();
    res.status(200).json(sugesstionTopic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error', errors : error  });
  }
};


const getrefundpolicy = async (req, res) => {
  try {
    const termsConditions = await db.refund_policy.findAll();
    res.status(200).json(termsConditions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error', errors : error  });
  }
};

const  createHelpSupport = async (req, res) => {
  try {
    const { vid } = req.params;
    const { message } = req.body;

    // Create a new help_support record
    const newHelpSupport = await db.HelpSupport.create({
      vid,
      message
      
    });

    // Send a response indicating success
    res.status(201).json({ message: 'Help support created successfully', data: newHelpSupport });
  } catch (error) {
    // Handle any errors
    console.error('Error creating help support:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getTermsConditions,
  createHelpSupport,
  getrefundpolicy,
  createSuggestion,
  getTopicIds
};