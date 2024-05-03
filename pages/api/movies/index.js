import getMovies from "../controller/movies/get_request";


export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            { return getMovies(req, res); }
        case 'POST':
            { return createMovie(req, res); }
        default:
            {
                return res.status(400).json({ message: 'Bad request' });
            }
    }
}