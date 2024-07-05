const express = require('express');
const router = express.Router();
const termsConditionController = require('../controllers/help_privacy');

router.get('/termsAndContions', termsConditionController.getTermsConditions);

router.get('/refund', termsConditionController.getrefundpolicy);

router.get('/getTopicIds', termsConditionController.getTopicIds);

router.post('/help_support/:vid', termsConditionController.createHelpSupport);

router.post('/createSuggestion/:vid', termsConditionController.createSuggestion);

module.exports = router;