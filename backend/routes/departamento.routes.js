import {methodsHTTP as departamentoController} from "../controllers/departamento.controller.js";
import { Router } from "express";

const router = Router();

router.get('/',departamentoController.getDato);
router.post('/',departamentoController.addDato);
router.get('/:id',departamentoController.idDato);
router.delete('/:id',departamentoController.delDato);
router.put('/:id',departamentoController.updDato);

export default router;