import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
