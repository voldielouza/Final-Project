import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import truckRoutes from './routes/truckRoutes.js';
import routeRoutes from './routes/routeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import yaml from 'js-yaml';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';

const app= express();
const PORT = 3000;

app.use(express.json());
if(process.env !=='test') app.use(morgan('tiny'));

let specs;
try{
    specs = yaml.load(fs.readFileSync('./docs/openapi.yaml', 'utf8'));
} catch(error) {
    console.log('Failed to load OpenAPI specification', error);
    process.exit(1);
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/trucks', truckRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    if(!err.status){
        err.status = 500;
        err.message = 'Internal Server Error';
    }
    res.status(err.status).json({error: err.message});
});

if(process.env.NODE_ENV !== 'test') {
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));
}

export default app;