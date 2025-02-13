#!/usr/bin/node

const jwt = require('jsonwebtoken')
const fs = require('fs')

// Load private RSA key
const privateKey = fs.readFileSync('./privatekey.pem', 'utf8')

const payload = {
  sub: '185903349',
  iss: '86t3nsmqh34l9dl72ac1ktuuph',
  aud: 'api.meetup.com',
}

// Sign the JWT
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '1h' })

console.log('Signed JWT:', token)
