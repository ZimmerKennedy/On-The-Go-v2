const express = require("express");
const app = express();
const cors = require("cors"); // Add this line
const path = require("path");
const env = require("dotenv").config({ path: "./.env.server" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

const staticPath = path.join(__dirname, process.env.STATIC_DIR || "../client/dist");

app.use(express.json());
app.use(express.static(staticPath));

app.use(cors({ 
  origin: ["http://localhost:5173", "https://on-the-go-v2.onrender.com", "https://on-the-go-v2.vercel.app"], 
  credentials: true 
}));
app.get("/", (req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  res.sendFile(indexPath);
});

app.get("/config", (req, res) => {
  console.log("Publishable key:", process.env.STRIPE_PUBLISHABLE_KEY);
  res.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try{

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      payment_method_types: ['card'],
      amount: 1999,
    });
    res.send({clientSecret: paymentIntent.client_secret});
  } catch(err){
    return res.status(400).send({
      error:{
        message: err.message,
      }
    })
  }
});

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
