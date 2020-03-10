const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('./config/config.js');
const modelsApi = require('./routes/models.js');
const {
  logErrors,
  errorHandler,
  boomrizedError
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/error404Handler');

app.use(cors);
//body parser --con este middleware se le otorga la capacidad a la api de poder interpretar el body de request
app.use(express.json());

//routes handlers
modelsApi(app);
//not found root 404
app.use(notFoundHandler);

//error middleware
app.use(logErrors); //show error in console
app.use(boomrizedError); //convert error to boom error if is required
app.use(errorHandler); //determite the error output bases on the enviroments

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
