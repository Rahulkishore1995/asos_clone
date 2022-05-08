const express = require("express");
const mongoose = require("mongoose");

const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cors())

const connect = () => {
    return mongoose.connect(
      "mongodb+srv://rauniyarsuraj:asosclone@cluster0.jzrrr.mongodb.net/asos_clone?retryWrites=true&w=majority"
    );
  };



const womenSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const women = mongoose.model("women",womenSchema)



// const card = require("../models/women.model.js");

app.get("/women", async (req, res) => {
  try {
    
    const cards = await women.find({}).lean().exec();
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    return res.status(200).send(cards);
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }
});

app.post("/", async (req, res) => {
  // req.body.userId= req.user._id
  try {
    const cards = await women.create(req.body);
    return res.status(201).send(cards);
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }
});


app.listen(port, async () => {
    try {
      await connect();
      console.log(`Listening on port 5000!`);
    } catch (error) {
      console.log(error);
    }
  });

