const { Service, Users, Services_users_favourites } = require('../db.js');
// const services_users_favourites = require('../models/Services_users_favourites.js');


async function addFavs(req, res, next) {
    try {
        const { serviceId , userId } = req.body;
        await Service.findByPk(serviceId);
        await Users.findByPk(userId);
        await Services_users_favourites.create({ serviceId: serviceId, userId: userId  });
        return res.status(200).json("add fav")
    } catch (e) {
        next (e);
    };
};


async function getFavs(req, res, next) {
    try {
        const { userId } = req.params;
        const userFavs = await Services_users_favourites.findAll({ 
            where: {
                userId: userId,
            }
        })
        return res.status(200).json(userFavs);
    } catch (e) {
        next (e);
    };
};

async function deleteFav(req, res, next) {
    try {
        const { userId, serviceId} = req.body;
        const deletedFav = await Services_users_favourites.destroy({
            where: {
                userId: userId,
                serviceId: serviceId,
            }
        })
        deletedFav ? res.status(200).json({message: 'deleted successfully: ', deletedFav}) : res.status(500).json({message: 'sorry, try again'});
    } catch (e) {
        next (e)
    };
};


module.exports = {
    addFavs,
    getFavs,
    deleteFav,
};