import axios from "axios";
import {REQUEST_BODY} from '../const/request';
import {DEFAULT_HEADERS} from '../const/headers';
import {URL_PROXY_CLIENTS, URL_PROXY_IBONUS} from '../const/urls';

export const send = axios.create({
	responseType: 'json',
	headers: DEFAULT_HEADERS,
});

export async function getAccessToken() {
	return await send.post(URL_PROXY_CLIENTS, REQUEST_BODY);
}

export async function getData(token) {
	return await send.get(`${URL_PROXY_IBONUS}${token}`);
}

