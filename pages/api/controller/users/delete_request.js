export default async function deleteUserById(req, res) {
    const result = await fetch(`http://localhost:2050/users/${req.query.userId}`,{method: "DELETE"})
        .then(res => res.json());
    res.status(200).json(result);
}