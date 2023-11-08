const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Something went wrong!</h1>')
})

app.get('/red', (req, res) => {
    res.redirect(301, 'https://javhay.movie/em-thu-ky-rieng-dam-dang-va-ten-sep-doi-bai-cuong-dam/')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})