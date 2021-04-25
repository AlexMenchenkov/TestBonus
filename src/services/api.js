import axios from "axios";
import {getRequestBody} from '../utils';
import {urlProxyClients, urlProxyIbonus, DEFAULT_HEADERS} from '../const/const';

export const send = axios.create({
	responseType: 'json',
	headers: DEFAULT_HEADERS,
});

export async function getAccessToken() {
	return await send.post(urlProxyClients, getRequestBody());
}

export async function getData(token) {
	return await send.get(`${urlProxyIbonus}${token}`);
}

