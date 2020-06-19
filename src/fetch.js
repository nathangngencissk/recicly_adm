import axios from 'axios';

const baseURL = 'https://t67vqv0hkk.execute-api.us-east-1.amazonaws.com/Prod';

export function _fetch(path) {
    return axios
        .get(`${baseURL}/${path}`)
        .then(res => res.data)
        .catch(err => console.log(err));
}

export function fetchUsers() {
    return _fetch('user/get-all'); // get, add, update, delete
}
