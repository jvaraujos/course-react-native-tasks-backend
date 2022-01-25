const moment = require('moment')

module.exports = app => {
    const getTasks = (req,res) =>{
        const date = req.query.date?req.quer.date:moment().endOf('day').toDate()

        app.db('users').where({
            userId:req.query.id
        })
        .where('estimateAt','<=',date)
        .orderBy('estimateAt')
        .then(tasks=>res.json(tasks))
        .catch(err => res.status(500).json(err))
    }
}