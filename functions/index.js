const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('test keys are here: https://dashboard.stripe.com/test/dashboard')

// API

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log('Payment Request Recieved URA!!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    // 201 -> OK, created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example end point
// http://localhost:5001/clone-7c8d8/us-central1/api