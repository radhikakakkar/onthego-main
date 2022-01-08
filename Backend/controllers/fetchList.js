const complaint = require('../models/complaint');

async function fetchList(req, res){
    await complaint.find({}, (err, docs) => {
        if(err)
            throw err;
        else{
            let results = [];
            results.push(docs.map(el => el.id)); 
            res.status(200).json({
                success: true,
                data: results
            });
        }
    });
} 

module.exports = fetchList;