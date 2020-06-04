const axios = require('axios')

export default async function News(request, response) {
    const headers = { 'Authorization': 'bearer 1d4c72910ba54321b8601c9a91fafd52' }
    const url = 'https://newsapi.org/v2/top-headlines?country=br'
    response.setHeader('Access-Control-Allow-Origin', '*')
    await axios.get(url, {headers}).then(res => response.json(res.data)).catch(e => console.log(e))
}