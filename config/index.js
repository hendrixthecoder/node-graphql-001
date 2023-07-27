const axios = require('axios')
const BASE_URL = `http://localhost:5001/users`
const PORT = 5000

const fetchData = async () => {
    let response = await axios.get(BASE_URL)
    return response.data
}

module.exports = { BASE_URL, fetchData, PORT }