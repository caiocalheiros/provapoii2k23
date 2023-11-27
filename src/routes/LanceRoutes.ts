import express from 'express';
import LanceController from '../controllers/LanceController';

const app = express();

const lanceController = new LanceController();
const lanceRouter = express.Router();

app.use(express.json());

// Rotas para Lances
app.post('/lances', lanceController.criarLance);
app.get('/lances', lanceController.obterLances);

lanceRouter.post('/create', lanceController.criarLance);
lanceRouter.get('/get', lanceController.obterLances);

export { lanceRouter }