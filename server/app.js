require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3015
const cors = require('cors')
const route = require('./routes/index')
const errorHandler = require('./middlewares/error-handler')

//body parser
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());

//routing
app.use(route);

//middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
})