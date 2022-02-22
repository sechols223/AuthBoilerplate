const express = require('express');
const router = express.Router();
const { registration, login, update, deleteUser } = require('/src/controllers/UserAuth');
const {adminAuth} = require('/src/middleware/UserAuth');

router.route('/login').post(login);
router.route("/register").post(registration);
router.route("/update").put(update);
router.route("/deleteUser").delete(deleteUser);

module.exports = router;