const router = require('express').Router();
const games = require(`./gamesRouter`)

const Controller = require (`../controllers/controller`)

router.get(`/`, Controller.home)
router.use('/games', games);

module.exports = router;