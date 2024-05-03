export default async function getMovies(req, res) {
    const result = await fetch("http://localhost:2050/movies")
        .then(res => res.json());
    res.status(200).json(result);
}