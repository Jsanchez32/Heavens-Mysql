import {methodsHTTP as municipioController} from "../controllers/municipio.controller.js";
import { Router } from "express";

const router = Router();

router.get('/',municipioController.getDato);
router.post('/',municipioController.addDato);
router.get('/:id',municipioController.idDato);
router.delete('/:id',municipioController.delDato);
router.put('/:id',municipioController.updDato);

export default router;