const router = require(`express`).Router()
const GamesController = require('../controllers/games');

router.get('/', GamesController.getAllGames);
router.get('/:gameId', GamesController.getGameById);
router.post('/add', GamesController.addGame);

module.exports = router