import express from 'express'
const app = express()
const port = 3000

app.get('/', (_req, res) => {
    res.send('Hello Dale!')
   })

   app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
   })

// exercise 1: https://hub.docker.com/r/insaneowl1993/hello-world

// checked, completion receipt for exericse 1 and 2
