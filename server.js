const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const PizzaController = require('./controllers/PizzaController');
const CustomerController = require('./controllers/CustomerController');
const OpenAiController = require('./controllers/OpenAI');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 8089;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});
app.use(express.static('./public'))

mongoose.connection.once('open', () => {
    console.log('Database Connection Sucessfull');
});

app.use('/pizza', PizzaController());
app.use('/customer', CustomerController());
app.use('/openAI', OpenAiController());





app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});