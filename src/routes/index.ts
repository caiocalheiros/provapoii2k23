import express from 'express';

import { lanceRouter } from './LanceRoutes';
import { leilaoRouter } from './LeilaoRoutes';
import { usuarioRouter } from './UsuarioRoutes';

const router = express.Router();

router.use('/lances', lanceRouter)
router.use('/leiloes', leilaoRouter)
router.use('/usuarios', usuarioRouter)

export default router