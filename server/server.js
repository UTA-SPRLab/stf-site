const env = require('dotenv').config().parsed
const config = require('./config.json');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const expressLogging = require('express-logging');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const logger = require('logops');

const sessionRoutes = require('./routes/session');
const fetchRoutes = require('./routes/fetch');
// const userRoutes = require('./routes/_users');
// const adminRoutes = require('./routes/_admin');
// const maintenanceRoutes = require('./routes/_maintenance');

// const ratelimits = require('./utils/ratelimits.js');

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.disable('x-powered-by')

// Logging
app.use(expressLogging(logger));

app.use(`/${config.docs.resource}`, swaggerUi.serve, swaggerUi.setup(swaggerDocument, config.docs.options)); // docs endpoint

// Rate Limits
// app.use(`${config.api.basePath}/${config.routes.session.name}/${config.routes.session.endpoints.register.name}/`, ratelimits.registration); // Register Rate Limit
// app.use(`${config.api.basePath}/${config.routes.session.name}/${config.routes.session.endpoints.login.name}/`, ratelimits.login); // Login Rate Limit
// app.use(`${config.api.basePath}/${config.routes.users.name}/`, ratelimits.user); // User Rate Limit
// app.use(`${config.api.basePath}/${config.routes.fetch.name}/`, ratelimits.fetch); // Fetch Rate Limit

// Routes

//!TODO: Redefine endpoints based on usage/utility rather than permission.
//!TODO: Concatenate similar functionality, and redefine performance/function based on permission
//!TODO: Redo security to be more informative
//!TODO: Change from JWT -> OAUTH
//!TODO: Provide options to allow for session token to be stored in browser for webapps
//!TODO: Improve messages; Respond with a system message for admin users, and give custom messages/errors for default users

app.use(`/${config.api.basePath}/${config.routes.session.name}/`, sessionRoutes); // Session Routes (register, login [only route that doesn't require authentication])
app.use(`/${config.api.basePath}/${config.routes.fetch.name}/`, fetchRoutes); // Fetch Routes (fetch data from the database)
// app.use(`/${config.api.basePath}/${config.routes.users.name}/`, userRoutes); // User Routes (user info)
// app.use(`/${config.api.basePath}/${config.routes.admin.name}/`, adminRoutes); // Admin Routes (permission, lookup, promote, demote, remove)
// app.use(`/${config.api.basePath}/${config.routes.maintenance.name}/`, maintenanceRoutes); // Maintenance Routes (add, remove, update)

// Start Server
app.listen(config.api.port, config.api.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.api.name} running on ${config.api.protocol}://${config.api.host}:${config.api.port}/${config.api.basePath}/`);
  logger.info(`${config.api.name} Docs running on ${config.api.protocol}://${config.api.host}:${config.api.port}/${config.docs.resource}`);
});

app.get(`/${config.api.basePath}`, (req, res, next) => {
  res.json({ "message": `${config.api.name}` });
});

