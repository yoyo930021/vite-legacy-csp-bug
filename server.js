const express = require('express')
const path = require('path')
const { cspHashes } = require('@vitejs/plugin-legacy')

const app = express()

const cspString = [
`default-src 'self';`,
`font-src 'self' https://fonts.gstatic.com;`,
`script-src 'self' ${cspHashes.map(el => `'sha256-${el}'`).join(' ')};`
].join('')

app.get('/', (req, res) => {
  res.header('Content-Security-Policy', cspString).sendFile(path.resolve(__dirname, './dist/index.html'))
})

app.use(express.static('./dist'))

app.listen(3000, () => {
  console.log('http://localhost:3000 can test.')
})
