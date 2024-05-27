import axios from "axios";
import {apiBaseUrl} from './Constants'

const instance = axios.create({
    baseURL:apiBaseUrl
})

export default instance;