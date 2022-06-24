module.exports = [
    {
        method: 'GET',
        path: '/api/v1/movies/getAll',
        handler: (request, h) => {
            return require('../data/movies.json');
        }
    }
];