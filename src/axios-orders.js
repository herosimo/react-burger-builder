/**
 * Axios - to handle with firebase
 */

import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-888dd.firebaseio.com/",
});

export default instance;
