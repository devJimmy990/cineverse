import getUser from "../controller/users/get_request";
import addNewUser from "../controller/users/post_request";
import updateUserData from "../controller/users/put_request";
import deleteUserById from "../controller/users/delete_request";

export default function handler(req, res) {
    switch (req.method) {
        case 'GET': return getUser(req, res);

        case 'POST': return addNewUser(req, res);

        case 'PUT': return updateUserData(req, res);

        case 'DELETE': return deleteUserById(req, res);
        
        default: return res.status(400)
            .json({ message: 'Bad request' });

    }
}