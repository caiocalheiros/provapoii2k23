import express from 'express';
import UsuarioController from '../controllers/UsuarioController';

const app = express();

const usuarioController = new UsuarioController();
const usuarioRouter = express.Router();

app.use(express.json());

// Rotas para Usuários
app.post('/usuarios', usuarioController.criarUsuario);
app.get('/usuarios', usuarioController.obterUsuarios);

usuarioRouter.post('/create', usuarioController.criarUsuario)
usuarioRouter.get('/get', usuarioController.obterUsuarios);

export { usuarioRouter }