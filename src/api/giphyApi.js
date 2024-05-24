import api from './api';

const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs';

const DEFAULT_PARAMS = {
    api_key: process.env.REACT_APP_API_GIPHY_KEY,
    limit : 5,
};

export const fetchTrendingGiphys = (cat) => {
    return api.get("search", {
        baseURL: GIPHY_BASE_URL,
        params: {...DEFAULT_PARAMS, q: cat},

    }
    )
}
