const { Repo } = require ('../models');

const repoController = {
    getRepo(req, res) {
        Repo.find({})
        .then(repoData => res.json(repoData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    getPulls(req, res){
        Repo.find({})
        .then(repoData => res.json(repoData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
    
}

module.exports = repoController;