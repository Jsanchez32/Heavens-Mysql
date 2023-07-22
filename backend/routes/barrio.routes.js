import {methodsHTTP as barrioController} from "../controllers/barrio.controller.js";
import { Router } from "express";

const router = Router();

router.get('/',barrioController.getDato);
router.post('/',barrioController.addDato);
router.get('/:id',barrioController.idDato);
router.delete('/:id',barrioController.delDato);
router.put('/:id',barrioController.updDato);

export default router;