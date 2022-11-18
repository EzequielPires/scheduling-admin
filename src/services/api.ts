import axios from "axios";
import { parseCookies } from "nookies";

export function getApi(ctx?: any) {
    const { 'mobilar.token': token } = parseCookies(ctx);
    const api = axios.create({
        baseURL: 'https://scheduling-system.herokuapp.com/'
    })
    if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`;
    return api;
}
export const api = getApi();