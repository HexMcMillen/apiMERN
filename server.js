const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const jwt = require('jsonwebtoken');
const payload = { id: User._id };
const userToken = jwt.sign(payload, process.env.STACKPROJECT);
const cookieParser = require('cookie-parser');

require('dotenv').config();

app.use(cookieParser());
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.listen(port, () => console.log(`Connected to port ${port}`));