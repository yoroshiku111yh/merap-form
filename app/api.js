
import { API } from './initialize';
const baseOptions = {
    "mode": "cors",
    "headers": {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "x-apikey": API.API_KEY
    }
}

const baseOptionsOther = {
    method: 'GET',
    redirect: 'follow'
}

const urlWithQuery = (url, query) => {
    url = url + '?q=' + JSON.stringify(query);
    return url;
}

export const getListArea = async (province = "") => {
    const options = Object.assign({}, { "method": "GET" }, baseOptionsOther);
    let isGetDistrict = province ? `/${province}` : ""
    let url = API.URL_OTHER + '/province' + isGetDistrict;
    try {
        let response = await fetch(url, options)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                if (json.length === 0) {
                    return { error: "not found" };
                }
                return json;
            })
        return response;
    }
    catch (e) {
        console.log(e);
    }
}

export const getAPIWithQuery = async ({ query, suffixUrl }) => {
    const options = Object.assign({}, { "method": "GET" }, baseOptions);
    let params = query;
    let url = urlWithQuery(API.BASE_URL + suffixUrl, params);
    try {
        let response = await fetch(url, options)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                if (json.length === 0) {
                    return { error: "Not found" };
                }
                return json;
            });
        return response;
    }
    catch (e) {
        console.log(e);
    }
}

export const postAPI = async ({ body, suffixUrl }) => {
    const options = Object.assign({}, { "method": "POST", "body": JSON.stringify(body) }, baseOptions);
    let url = API.BASE_URL + suffixUrl;
    try {
        let response = await fetch(url, options)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                if (json.status) {
                    return { error: json.list[0].message[0] }
                }
                return json;
            })
        return response;
    }
    catch (e) {
        console.log(e);
    }
}

export const putAPI = async ({ body, suffixUrl }) => {
    const options = Object.assign({}, { "method": "PUT", "body": JSON.stringify(body) }, baseOptions);
    let url = API.BASE_URL + suffixUrl;
    try {
        let response = await fetch(url, options)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                if (json.status) {
                    return { error: json.list[0].message[0] }
                }
                return json;
            })
        return response;
    }
    catch (e) {
        console.log(e);
    }
}

export const patchAPI = async ({ body, suffixUrl }) => {
    const options = Object.assign({}, { "method": "PATCH", "body": JSON.stringify(body) }, baseOptions);
    let url = API.BASE_URL + suffixUrl;
    try {
        let response = await fetch(url, options)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                if (json.status) {
                    return { error: json.list[0].message[0] }
                }
                return json;
            })
        return response;
    }
    catch (e) {
        console.log(e);
    }
}