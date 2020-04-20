const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
const cors = require('cors');
const utilRouter = require("./routes/util")

const userRouter = require('./routes/userManager');
const sellerRouter = require('./routes/sellermanager');
const productRouter = require('./routes/productmanager');
const stripe = require("stripe")("sk_test_4UUC1EhrWC2XwOh5Y7ag4oK300raaV4B4f"); //test secret key

app.use(parser.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/seller', sellerRouter);
app.use('/model', productRouter);
app.use('/util',utilRouter);
app.get('/', (req, res) => {
    res.send('get request accepted');
})

app.listen(port, () => {
    console.log('server started');


 app.post("/create-payment-intent", async (req, res) => {
        const data = req.body;
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
          amount: data.amount,
          currency: 'inr'
        });
     
        res.status(200).json(paymentIntent);
      });
})