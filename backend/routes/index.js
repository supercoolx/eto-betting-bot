const express = require('express');
const authRouter = require('./auth');
const userRouter = require('./user');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);

const allRouter = express.Router();
allRouter.use('/api/v1', router);

module.exports = allRouter;