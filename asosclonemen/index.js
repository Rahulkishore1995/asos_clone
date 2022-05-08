const express = require ("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();


const port = process.env.PORT || 5100;

app.use(express.json());
app.use(cors())

const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://rauniyarsuraj:asosclone@cluster0.jzrrr.mongodb.net/asos_clone?retryWrites=true&w=majority"
    );
};

const menSchema = new mongoose.Schema(
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
  
  const holiday = mongoose.model("holiday",menSchema);
  const nike = mongoose.model("nike",menSchema)
  const polo = mongoose.model("polo",menSchema)
  const berghause = mongoose.model("berghause",menSchema)


  app.get("/holiday", async (req, res) => {
    try {
      const cards = await holiday.find({}).lean().exec();
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      return res.status(200).send(cards);
    } catch (err) {
      return res.status(401).send({ message: err.message });
    }
  });
  app.get("/polo", async (req, res) => {
    try {
      const cards = await polo.find({}).lean().exec();
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      return res.status(200).send(cards);
    } catch (err) {
      return res.status(401).send({ message: err.message });
    }
  });
  app.get("/nike", async (req, res) => {
    try {
      const cards = await nike.find({}).lean().exec();
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      return res.status(200).send(cards);
    } catch (err) {
      return res.status(401).send({ message: err.message });
    }
  });
  app.get("/berghause", async (req, res) => {
    try {
      const cards = await berghause.find({}).lean().exec();
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      return res.status(200).send(cards);
    } catch (err) {
      return res.status(401).send({ message: err.message });
    }
  });
  
  app.post("/", async (req, res) => {
    try {
      const cards = await holiday.create(req.body);
      return res.status(201).send(cards);
    } catch (err) {
      return res.status(401).send({ message: err.message });
    }
  });
  
  
  app.listen(port, async () => {
      try {
        await connect();
        console.log(`Listening on port 5100!`);
      } catch (error) {
        console.log(error);
      }
    });
  
  