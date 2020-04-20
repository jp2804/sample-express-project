const tests = require('../models/test');

module.exports = {
    getData: async (req, res) => {
        try {
            const data = await tests.findAll({
                where: {
                }
            });
            res.status(200).send(data);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
    insertData: async (req, res) => {
        try {
            await tests.create({
                sno: req.query.sno,
                name: req.query.name
            });
            res.status(201).send('Created');
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
    deleteData: async (req, res) => {
        try {
            await tests.destroy({
                where: {
                }
            });
            res.status(200).send('Deleted');
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
    updateData: async (req, res) => {
        try {
            await tests.update({
            }, {
                where: {}
            });
            res.status(200).send('Updated');
        } catch (err) {
            res.status(404).send(err.message);
        }
    }
}