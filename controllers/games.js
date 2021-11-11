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

    static async updateGame(req, res) {
        const gameId = req.params.gameId;
        const { name, description, release_date, platform, ratings } = req.body
        try {
            const updateGame = await GameList.findByIdAndUpdate(gameId, {
                name,
                description,
                release_date,
                platform,
                ratings
            })
            res.status(200).json({success: true, data: updateGame})
        } catch (error) {
            console.error(error)
            res.status(409).json({success: false, data: [], error: error})
        }
    }

    static async deleteGame(req, res) {
        const gameId = req.params.gameId;
        try {
            const deleteOneGame = await GameList.deleteOne({_id: gameId})
            res.status(200).json({success: true, data: deleteOneGame.deletedCount===1 ? "Game Info Deleted": "Game Cannot Deleted"})
        } catch (error) {
            console.error(error)
            res.status(409).json({success: false, data: [], error: error})
        }
    }
}

module.exports = GamesController