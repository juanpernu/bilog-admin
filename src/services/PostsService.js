import axios from 'axios';
import { bilogEndpoint } from '../config.js';

class PostsService {
    async getAllPosts() {
        try {
            const { data } = await axios.get(`${bilogEndpoint}`);
            return data;
        } catch (err) {
            const error = err.message;
            throw error;
        }
    };
}

export default new PostsService();