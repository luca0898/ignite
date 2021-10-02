import { NextApiRequest, NextApiResponse } from "next"

const UserApi = (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Luca'},
        { id: 2, name: 'Dani'},
        { id: 3, name: 'Rafa'},
    ]

    return response.json(users);
}

export default UserApi;