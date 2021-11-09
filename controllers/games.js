const GameList = require('../models/games');

class GamesController {

    static async getAllGames(req, res, next) {
        try {
            const getAllGames = await GameList.find()
            res.status(200).json({success: true, data: getAllGames})
        } catch (error) {
            res.status(409).json({success: false, data: [], error: error})
        }
    }

    static async getGameById(req, res, next) {
        const gameId = req.params.gameId;
        try {
            const getOneGame = await GameList.findById(gameId)
            res.status(200).json({success: true, data: getOneGame})
        } catch (error) {
            res.status(409).json({success: false, data: [], error: error})
        }
    }

    static async addGame(req, res) {
        const { name, description, release_date, platform, ratings } = req.body
        try {
            const newGameList = new GameList({
                name,
                description,
                release_date,
                platform,
                ratings
            })
            const addGame = await newGameList.save()
            res.status(201).json({success: true, data: addGame}) 
        } catch (error) {
            console.error(error)
            res.status(409).json({success: false, data: [], error: error})
        }
    }

    // updateGame(req, res) {
    //     const gameId = req.params.id;
    //     const game = req.body;
    //     const updatedGame = this.games.updateGame(gameId, game);
    //     if (updatedGame) {
    //         res.send(updatedGame);
    //     } else {
    //         res.status(404).send({message: 'Game not found'});
    //     }
    // }

    // deleteGame(req, res) {
    //     const gameId = req.params.id;
    //     const deletedGame = this.games.deleteGame(gameId);
    //     if (deletedGame) {
    //         res.send(deletedGame);
    //     } else {
    //         res.status(404).send({message: 'Game not found'});
    //     }
    // }
}

module.exports = GamesController