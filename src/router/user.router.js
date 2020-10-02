const express = require('express');
const{postUser, getUser, updateUser, deleteUser} = require('../controllers/user.controller');
const router = express.Router();
import errorHandler from '../middleware/errorHandlers/ApplicationError';

//router.post('/user/(:id)?',postUser)


router.route('/user/(:id)?').post(postUser).get(getUser).put(updateUser).delete(deleteUser);
module.exports = router;