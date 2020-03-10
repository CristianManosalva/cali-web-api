const express = require('express');
const app = express();
const { config } = require('./config/config.js');
const modelsApi = require('./routes/models.js');
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

//body parser --con este middleware se le otorga la capacidad a la api de poder interpretar el body de request
app.use(express.json());

//routes handlers
modelsApi(app);

//error middleware
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
