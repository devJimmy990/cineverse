export default async function updateUserData(req, res) {
    const result = await fetch(`http://localhost:2050/users/${req.query.userId}`,
        { body: JSON.stringify(req.body), method: "PUT" })
        .then(res => res.json());
    res.status(200).json(result);
}