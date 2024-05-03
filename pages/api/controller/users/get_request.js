export default async function getUser(req, res) {
    const userId = req.query.userId
    const result = await fetch(`http://localhost:2050/users/${userId ? userId : ""}`)
        .then(res => res.json());
    res.status(200).json(result);
}