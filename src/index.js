const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./productController');
const movementRouter = require('./movementController');
const reportsRouter = require('./reportsController');

const app = express();
app.use(bodyParser.json());

app.use('/products', productRouter);
app.use('/movements', movementRouter);
app.use('/reports', reportsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
