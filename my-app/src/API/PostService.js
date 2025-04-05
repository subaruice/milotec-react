import axios from "axios";

export default class PostServie {
    static async GetAll(limit = 20, page = 1) {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/`,
            {
                params: {
                    _limit: limit,
                    _page: page,
                },
            }
        );
        return response;
    }


}
