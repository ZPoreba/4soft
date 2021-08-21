import axios from "axios";

const API_URL = 'https://api.recruitment.4soft.tech';

class AppDataService {

    getListData() {
        return axios.get(`${API_URL}/list`);
    }

    getAppDetails(id) {
        return axios.get(`${API_URL}/details/${id}`);
    }
}

export default new AppDataService();