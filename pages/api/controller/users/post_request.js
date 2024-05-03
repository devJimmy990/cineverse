export default async function addNewUser(req, res) {
    const users = await fetch("http://localhost:2050/users")
        .then(res => res.json());

    const reqUser = JSON.parse(req.body);

    const existingUser = users.find(user => user.email === reqUser.email);
    if (existingUser) { return res.status(200).json({ status: "success", message: "User already exists", data: existingUser }); }

    else {
        const result = await fetch("http://localhost:2050/users/", {
            method: "POST",
            body: JSON.stringify(reqUser),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json());

        return res.status(200).json({ status: "success", message: "User added successfully", result });
    }

}