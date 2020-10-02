const express = require('express');
const{postMessage, getMessage, updateMessage, deleteMessage} = require('../controllers/message.controller');
const router = express.Router();
import errorHandler from '../middleware/errorHandlers/ApplicationError';

//router.post('/user/(:id)?',postUser)


router.route('/message/(:id)?').post(postMessage).get(getMessage).put(updateMessage).delete(deleteMessage);
module.exports = router;