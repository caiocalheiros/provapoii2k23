import express from 'express';
import LeilaoController from '../controllers/LeilaoController';

const app = express();

const leilaoController = new LeilaoController();
const leilaoRouter = express.Router();

app.use(express.json());

// Rotas para Leilões
app.post('/leiloes', leilaoController.criarLeilao);
app.get('/leiloes', leilaoController.obterLeiloes);

leilaoRouter.post('/create', leilaoController.criarLeilao);
leilaoRouter.get('/get', leilaoController.obterLeiloes);

export { leilaoRouter }

