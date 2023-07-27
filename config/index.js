const axios = require('axios')
const BASE_URL = `http://localhost:5001/users`
const PORT = 5000

const fetchAllUSers = async () => {
    let response = await axios.get(BASE_URL)
    return response.data
}

const fetchOneUser = async (id) => {
    let response = await axios.get(`${BASE_URL}/${id}`)
    return response.data
}

const updateUser = async (id, user) => {
    const response = await axios.put(`${BASE_URL}/${id}`, user)
    return response.data
}

module.exports = { BASE_URL, fetchAllUSers, fetchOneUser, updateUser, PORT }