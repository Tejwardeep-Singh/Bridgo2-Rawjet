require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("io", io);


app.use(session({
  secret: "bridgo_secret",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use("/", require("./routes/homeRouter"));
app.use("/vendor", require("./routes/vendorRouter"));
app.use("/supplier", require("./routes/supplierRouter"));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));


require("./sockets/auction.socket")(io);


require("./services/auctionScheduler");


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));